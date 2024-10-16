import { Request, Response } from "express";
import { ProductService } from "../services/product.service";
import { Product } from "../entities/Product.entity";
import { ProductException } from "../exceptions/ProductException";

export class ProductController {
  private readonly productService: ProductService;
  constructor() {
    this.productService = new ProductService();
  }

  // Obtener todos los productos
  async getAllProducts(req: Request, res: Response): Promise<any> {
    try {
      const products = await this.productService.getAllProducts();

      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ message: "Error getting all products" });
    }
  }

  // Obtener todos los productos por categoria
  async getProductsByCategory(req: Request, res: Response): Promise<any> {
    try {
      const categoryId: string = req.params.categoryId;
      const products: Product[] | undefined =
        await this.productService.getProductsByCategory(categoryId);

      return res.status(200).json(products);
    } catch (error) {
      if (error instanceof ProductException) {
        throw error;
      }
      throw new ProductException("Error getting all products", 500);
    }
  }
}
