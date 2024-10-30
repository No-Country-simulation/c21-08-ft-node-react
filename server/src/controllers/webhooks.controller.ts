import { NextFunction, Request, Response } from "express";
import { WebHooksService } from "../services/webhooks.service";

export class WebHooksController {
  private readonly webHooksService: WebHooksService;
  constructor() {
    this.webHooksService = new WebHooksService();
  }
  async handleWebHook(req: Request, res: Response, next: NextFunction) {
    const webHookData = req.body;
    try {
      await this.webHooksService.handleWebHook(webHookData);

      res.status(201);
    } catch (error) {
      next(error);
    }
  }
}
