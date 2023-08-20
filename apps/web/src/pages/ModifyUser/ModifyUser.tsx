import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "ui";

interface FormInput {
  firstName: string;
  lastName: string;
  preferences: string;
}

const ModifyUser = () => {
  const { register, handleSubmit } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log("data = ", data);

  return (
    <div className="h-screen">
      <h1 className="text-3xl font-extrabold p-6 text-center">Modify a user</h1>

      <div className="flex flex-col gap-2 w-1/2 m-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-left">First Name</label>
            <input {...register("firstName")} className="rounded border-gray-500 border-2 p-1" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-left">Last Name</label>
            <input {...register("lastName")} className="rounded border-gray-500 border-2 p-1" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-left">Preferences</label>
            <select {...register("preferences")} className="rounded border-gray-500 border-2 p-1">
              <option value="consent">consent</option>
              <option value="no-consent">no-consent</option>
            </select>
          </div>

          <Button type="submit">Update User</Button>
        </form>

        <Button type="submit" className="bg-red-500">
          Delete User
        </Button>
      </div>
    </div>
  );
};

export default ModifyUser;
