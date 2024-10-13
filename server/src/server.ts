import express from "express";
import app from "./app";
import { AppDataSource } from "./data-source";
import productRoutes from "./routes/product.route";
import userRoutes from "./routes/user.route";

const PORT = process.env.PORT || 3170;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");

    app.use(express.json());
    app.use("/user", userRoutes);
    app.use("/product", productRoutes);

    app.listen(PORT, () => {
      console.log(`Port running in port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });

//
