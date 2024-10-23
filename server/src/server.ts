const cors = require("cors");
import express from "express";
import app from "./app";
import { AppDataSource } from "./data-source";
import categoryRoutes from "./routes/category.route";
import orderRoutes from "./routes/clientOrder.route";
import productRoutes from "./routes/product.route";
import promotionRoutes from "./routes/promotion.route";
import userRoutes from "./routes/user.route";

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
    app.use("/order", orderRoutes);

    //Middleware de manejo de errores.
    app.use(
      (
        err: any,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        console.error(err.stack);
        res
          .status(500)
          .json({
            message: "Ocurrió un error en el servidor",
            error: err.message,
          });
      }
    );

    app.listen(PORT, () => {
      console.log(`Port running in port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });

//
