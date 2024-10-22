import { Request, Response } from "express";
import { ClientOrderService } from "../services/clientOrder.service";

export class ClientOrderController {
  private readonly clientOrderService: ClientOrderService;

  constructor() {
    this.clientOrderService = new ClientOrderService();
  }

  async createOrder(req: Request, res: Response): Promise<any> {
    const userId = req.body.userId;
    const delivery = req.body.delivery;
    const methodOfPayment = req.body.methodOfPayment;
    try {
      const order = await this.clientOrderService.createOrder(
        userId,
        delivery,
        methodOfPayment
      );

      if(!order) {
        //Manejo de error pendiente
      }

      return res
        .status(201)
        .json({
          message: "Order succesfully created",
          orderId: order?.clientOrderId,
        });
    } catch (error) {
      //Manejo de error pendiente
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
