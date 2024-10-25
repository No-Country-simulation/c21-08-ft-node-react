import { NextFunction, Request, Response } from "express";
import { OrderProductService } from "../services/orderProduct.service";
import { Product } from "../entities/Product.entity";

export class OrderProductController {
  private readonly orderProductService: OrderProductService;
  constructor() {
    this.orderProductService = new OrderProductService();
  }

  async addProductToOrder(req: Request, res: Response, next: NextFunction) {
    const { orderId } = req.params;
    const { products } = req.body;

    try {
      await this.orderProductService.addProductToOrder(orderId, products);

      res.status(200).json({ message: "Products added to cart succesfully" });
    } catch (error) {
      next(error);
    }
  }
}
