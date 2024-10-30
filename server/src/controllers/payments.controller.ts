import { NextFunction, Request, Response } from "express";
import { PaymentsService } from "../services/payments.service";

export class PaymentsController {
  private readonly paymentsService: PaymentsService;
  constructor() {
    this.paymentsService = new PaymentsService();
  }

  async createPreference(req: Request, res: Response, next: NextFunction) {
    const { products } = req.body;
    try {
      const preference = await this.paymentsService.createPreference(products);

      res.status(201).json(preference);
    } catch (error) {
      next(error);
    }
  }
}
