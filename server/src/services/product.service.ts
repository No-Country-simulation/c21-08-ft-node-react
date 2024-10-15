import { Product } from "../entities/Product.entity";
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
      throw new Error("Error getting all products");
    }
  }

  async getProductsByCategory(categoryId: string) {
    try {
      const category = await this.categoryService.getCategoryById(categoryId);
      return productRepository.find({ where: { category } });
    } catch (error) {}
  }
}
