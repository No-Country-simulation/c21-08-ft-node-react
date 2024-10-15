const cors = require("cors");
import express from "express";
import app from "./app";
import { AppDataSource } from "./data-source";
import categoryRoutes from "./routes/category.route";
import productRoutes from "./routes/product.route";
import userRoutes from "./routes/user.route";
import promotionRoutes from "./routes/promotion.route";

const PORT = process.env.PORT || 3170;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");

    app.use(express.json());
    app.use(cors());
    app.use("/user", userRoutes);
    app.use("/product", productRoutes);
    app.use("/category", categoryRoutes);
    app.use("/promotion", promotionRoutes);

    app.listen(PORT, () => {
      console.log(`Port running in port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });

//
