import { User } from "shared-ts";
import { database } from "../../../database/databaseConfiguration";
import { UserEntity } from "../entities/User";

export const getUser = async (id: string) => {
  const user = await database.getRepository(UserEntity).findOneBy({ user_id: id });
  return user;
};

export const getAllUsers = async () => {
  const user = await database.getRepository(UserEntity).find();
  return user;
};

export const createUser = async (user: User) => {
  const userEntity = new UserEntity();
  userEntity.first_name = user.firstName;
  userEntity.last_name = user.lastName;

  const userRepository = database.getRepository(UserEntity);

  await userRepository.save(userEntity);
};

export const updateUser = async (user: User) => {
  const userRepository = database.getRepository(UserEntity);
  const userEntity = await userRepository.findOneByOrFail({
    user_id: user.userId,
  });

  userEntity.first_name = user.firstName;
  userEntity.last_name = user.lastName;

  await userRepository.save(userEntity);
};

export const deleteUser = async (userId: string) => {
  const userRepository = database.getRepository(UserEntity);

  const userEntity = await userRepository.findOneByOrFail({
    user_id: userId,
  });

  await userRepository.remove(userEntity);
};
