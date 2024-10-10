import { Router } from "express";
import productsRouter from "./product.router";
import userRouter from "./user.router";

const router: Router = Router();


router.use("/products", productsRouter);
router.use("/users", userRouter);

export default router;