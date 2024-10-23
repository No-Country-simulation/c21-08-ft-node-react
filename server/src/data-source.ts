import "reflect-metadata";
import { join } from "path";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "kramer",
  synchronize: true,
  logging: true,
  entities: [join(__dirname, "/**/*.entity{.ts,.js}")],
});
