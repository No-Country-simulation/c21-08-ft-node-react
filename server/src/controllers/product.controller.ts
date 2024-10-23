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

  // Obtener producto por id
  async getProductById(req: Request, res: Response): Promise<any> {
    try {
      const productId: string = req.params.productId;
      const product: Product | undefined =
        await this.productService.getProductById(productId);

      return res.status(200).json(product);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new ProductException("Error getting a product by Id", 500);
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

  //Obtener todos los productos que tienen una promocion activa
  async getProductsWithPromotion(req: Request, res: Response) {
    try {
      const products: Product[] =
        await this.productService.getProductsWithPromotion();

      res.status(200).json(products);
    } catch (error) {
      if (error instanceof ProductException) {
        throw error;
      }

      throw new ProductException("Error getting products in promotion", 500);
    }
  }
}
