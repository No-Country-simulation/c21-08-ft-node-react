import { NextFunction, Request, Response } from "express";
import { ClientOrderService } from "../services/clientOrder.service";
import { CreateOrderDto } from "../dto/CreateOrder.dto";

export class ClientOrderController {
  private readonly clientOrderService: ClientOrderService;

  constructor() {
    this.clientOrderService = new ClientOrderService();
  }

  async createOrder(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { userId, delivery, methodOfPayment } = req.body;

    try {
      const order = await this.clientOrderService.createOrder(
        userId,
        delivery,
        methodOfPayment
      );

      return res.status(201).json({
        message: "Order succesfully created",
        orderId: order?.clientOrderId,
      });
    } catch (error) {
      next(error);
    }
  }

  async confirmOrder(req: Request, res: Response): Promise<any> {
    try {
      const orderId = req.query.orderId;
      await this.clientOrderService.confirmOrder(orderId);

      return res
        .status(200)
        .json({ message: "Order has been confirmed", order: orderId });
    } catch (error) {}
  }
}
