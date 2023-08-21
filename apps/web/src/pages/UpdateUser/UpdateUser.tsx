import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Link } from "ui";
import { trpc } from "../../trpc";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { User } from "shared-ts";

interface FormInput {
  firstName: string;
  lastName: string;
}

const UpdateUser = () => {
  const [user, setUser] = useState<User>();
  const { userId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [responseText, setResponseText] = useState("");

  const { register, handleSubmit, reset } = useForm<FormInput>();

  useEffect(() => {
    const getUser = async () => {
      try {
        if (!userId) throw "no user ID";

        const user = await trpc.user.get.query({ userId });

        setUser(user);
        setIsLoading(false);
        reset(user);
      } catch (error) {
        console.log("handle UI error on page load", error);
        setIsLoading(false);
      }
    };

    void getUser();
  }, []);

  if (isLoading) {
    return <div>Loading... </div>;
  }

  if (!userId || !user) {
    return (
      <div>
        <p className="text-3xl font-extrabold p-6 text-center">
          Could not find user: {userId}. Please try and find another user from{" "}
          <Link href="/users" className="text-red-500">
            Here
          </Link>
        </p>
      </div>
    );
  }

  const onSubmitUpdateUser: SubmitHandler<FormInput> = async (data) => {
    try {
      const { firstName, lastName } = data;

      await trpc.user.update.mutate({
        userId,
        firstName,
        lastName,
      });

      const user = await trpc.user.get.query({ userId });
      setUser(user);
      setResponseText(`Successfully updated user: ${userId}`);
    } catch (error) {
      console.log("handle UI error on user update", error);
    }
  };

  const onClickDeleteUser = async (userId: string) => {
    try {
      await trpc.user.delete.mutate({
        userId,
      });

      navigate("/users");
    } catch (error) {
      console.log("handle UI error on deleting update", error);
    }
  };
  return (
    <div className="h-screen">
      <h1 className="text-3xl font-extrabold p-6 text-center">Updating user: {userId}</h1>

      <div className="flex flex-col gap-2 w-1/2 m-auto">
        <form onSubmit={handleSubmit(onSubmitUpdateUser)}>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-left">First Name</label>
            <input {...register("firstName")} className="rounded border-gray-500 border-2 p-1" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-left">Last Name</label>
            <input {...register("lastName")} className="rounded border-gray-500 border-2 p-1" />
          </div>

          <Button type="submit">Update User</Button>
        </form>

        <Button type="submit" className="bg-red-500" onClick={() => onClickDeleteUser(userId)}>
          Delete User
        </Button>

        <p className="text-center">{responseText}</p>
      </div>
    </div>
  );
};

export default UpdateUser;
