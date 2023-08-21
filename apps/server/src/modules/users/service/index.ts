import { User } from "shared-ts";
import * as database from "../database";

export const getUser = async (id: string) => {
  const user = await database.getUser(id);
  return [
    {
      firstName: "ryan",
      lastName: "robinson",
    },
  ];
};

export const updateUser = async (user: User) => {
  await database.updateUser(user);
};

export const deleteUser = async (userId: string) => {
  await database.deleteUser(userId);
};
