import "reflect-metadata";
import { join } from "path";
import { DataSource } from "typeorm";
import { config } from "dotenv";
config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  //Cambiar a 3306 en caso que no funcione (por si olvido cambiarlo antes de pushear)
  port: 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "kramer",
  synchronize: true,
  logging: true,
  entities: [join(__dirname, "/**/*.entity{.ts,.js}")],
});
