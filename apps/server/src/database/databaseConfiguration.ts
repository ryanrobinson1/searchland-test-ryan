import { DataSource } from "typeorm";
import { UserEntity } from "../modules/users/entities/User";

export const database = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "ryan",
  password: "password",
  database: "searchland",
  synchronize: true,
  logging: true,
  entities: [UserEntity],
  subscribers: [],
  migrations: [],
});

export const connect = async () => {
  try {
    await database.initialize();
  } catch (error) {
    throw `Failed to connect to database with error - ${error}`;
  }
};
