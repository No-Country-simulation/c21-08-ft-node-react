const cors = require("cors");
import express from "express";
import app from "./app";
import { AppDataSource } from "./data-source";
import categoryRoutes from "./routes/category.route";
import orderRoutes from "./routes/clientOrder.route";
import productRoutes from "./routes/product.route";
import promotionRoutes from "./routes/promotion.route";
import userRoutes from "./routes/user.route";
import userAuth from "./routes/auth.route";

const PORT = process.env.PORT || 3170;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");

    app.use(express.json());
    app.use(cors());
    app.use("/user", userRoutes);
    app.use("/auth", userAuth);
    app.use("/product", productRoutes);
    app.use("/category", categoryRoutes);
    app.use("/promotion", promotionRoutes);
    app.use("/order", orderRoutes);

    app.listen(PORT, () => {
      console.log(`Port running in port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });

//
