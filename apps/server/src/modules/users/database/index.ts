import { User } from "shared-ts";

export const getUser = (id: string) => {
  console.log("db getting user");
};

export const updateUser = (user: User) => {
  console.log("db updating user");
};

export const deleteUser = (id: string) => {
  console.log("db deleting user");
};
