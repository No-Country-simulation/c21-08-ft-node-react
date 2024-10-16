import { Category } from "../entities/Category.entity";
import { Product } from "../entities/Product.entity";
import { CategoryException } from "../exceptions/CategoryException";
import { ProductException } from "../exceptions/ProductException";
import { productRepository } from "../repositories/product.repository";
import { CategoryService } from "./category.service";

export class ProductService {
  private readonly categoryService: CategoryService;
  constructor() {
    this.categoryService = new CategoryService();
  }

  async getAllProducts(): Promise<Product[]> {
    try {
      return await productRepository.find();
    } catch (error) {
      throw new ProductException("Error getting all products", 500);
    }
  }

  async getProductsByCategory(categoryId: string): Promise<Product[]> {
    try {
      const category: Category | undefined =
        await this.categoryService.getCategoryById(categoryId);

      return productRepository.find({
        where: { category },
        relations: ["category"],
      });
    } catch (error) {
      if (error instanceof CategoryException) {
        throw error;
      }
      throw new ProductException("Error getting products by category", 500);
    }
  }
}
