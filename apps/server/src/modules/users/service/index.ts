import { User } from "shared-ts";
import * as database from "../database";

export const getUser = async (userId: string) => {
  const userEntity = await database.getUser(userId);

  if (!userEntity) throw `Failed to find userId: ${userId}`;

  const user: User = {
    firstName: userEntity?.first_name,
    lastName: userEntity?.last_name,
    userId: userEntity?.user_id,
  };

  return user;
};

export const getAllUsers = async () => {
  const userEntities = await database.getAllUsers();

  const users = userEntities.map((userEntity): User => {
    const { first_name, last_name, user_id } = userEntity;

    return {
      firstName: first_name,
      lastName: last_name,
      userId: user_id,
    };
  });

  return users;
};

export const createUser = async (user: User) => {
  await database.createUser(user);
};

export const updateUser = async (user: User) => {
  await database.updateUser(user);
};

export const deleteUser = async (userId: string) => {
  await database.deleteUser(userId);
};
