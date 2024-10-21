import { Request, Response } from "express";
import { ClientOrderService } from "../services/clientOrder.service";

export class ClientOrderController {
  private readonly clientOrderService: ClientOrderService;

  constructor() {
    this.clientOrderService = new ClientOrderService();
  }

  async createOrder(req: Request, res: Response): Promise<any> {
    const userId = req.body.userId;
    try {
      const order = this.clientOrderService.createOrder(userId);

      return res
        .status(201)
        .json({ message: "Order succesfully created", order });
    } catch (error) {}
  }

  async confirmOrder(req: Request, res: Response): Promise<any> {
    try {
      const orderId = req.query.orderId;
      await this.clientOrderService.confirmOrder(orderId);

      return res
        .status(200)
        .json({ message: "Order has been confirmed", orderId });
    } catch (error) {}
  }
}
