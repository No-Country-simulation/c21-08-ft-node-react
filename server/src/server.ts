import app from "./app";
import express from "express";
import { AppDataSource } from "./data-source";
import userRoutes from "./routes/user.route";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    app.use(express.json());

    app.use("/user", userRoutes);

    app.listen(PORT, () => {
      console.log(`Port running in port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });

//
