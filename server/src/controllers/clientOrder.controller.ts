import { NextFunction, Request, Response } from "express";
import { ClientOrderService } from "../services/clientOrder.service";
import { CreateOrderDto } from "../dto/CreateOrder.dto";
import { ClientOrderException } from "../exceptions/ClientOrderException";

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

  async getOrderById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { clientOrderId } = req.params;
      const order = await this.clientOrderService.getOrderById(clientOrderId);

      return res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  }

  async getOrdersByUserId(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { userId } = req.params;
      const orders = await this.clientOrderService.getOrdersByUserId(userId);

      return res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
}
