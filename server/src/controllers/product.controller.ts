import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

export class ProductController {
  private readonly productService: ProductService;
  constructor() {
    console.log("Instantiating UserService in the controller...");
    this.productService = new ProductService();
  }

  async getAllProducts(req: Request, res: Response): Promise<any> {
    try {
      console.log("wefwe")
      const products = await this.productService.getAllProducts();

      console.log("wwxcs")

      return res.json(products);
    } catch (error) {
      return res.status(500).json({ message: "Error getting all products" });
    }
  }
}
