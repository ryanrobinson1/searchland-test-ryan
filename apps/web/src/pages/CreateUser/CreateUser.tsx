import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "ui";
import { trpc } from "../../trpc";
import { useParams } from "react-router-dom";

interface FormInput {
  firstName: string;
  lastName: string;
}

const CreateUser = () => {
  const { register, handleSubmit } = useForm<FormInput>();
  const [responseText, setResponseText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    setIsSubmitting(true);
    const { firstName, lastName } = data;

    await trpc.user.create.mutate({
      firstName,
      lastName,
    });

    setResponseText(`Successfully created a user`);

    setIsSubmitting(false);
  };

  return (
    <div className="h-screen">
      <h1 className="text-3xl font-extrabold p-6 text-center">Create a user</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 w-1/2 m-auto">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-left">First Name</label>
          <input {...register("firstName")} className="rounded border-gray-500 border-2 p-1" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-left">Last Name</label>
          <input {...register("lastName")} className="rounded border-gray-500 border-2 p-1" />
        </div>

        <Button disabled={isSubmitting} type="submit">
          Create user
        </Button>
      </form>
      <p className="text-center">{responseText}</p>
    </div>
  );
};

export default CreateUser;
