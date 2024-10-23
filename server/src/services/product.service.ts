import { IsNull, Not } from "typeorm";
import { Category } from "../entities/Category.entity";
import { Product } from "../entities/Product.entity";
import { Promotion } from "../entities/Promotion.entity";
import { CategoryException } from "../exceptions/CategoryException";
import { ProductException } from "../exceptions/ProductException";
import { productRepository } from "../repositories/product.repository";
import { CategoryService } from "./category.service";
import { CreateProductDto } from "../dto/ProductDto";

export class ProductService {
  private readonly categoryService: CategoryService;
  constructor() {
    this.categoryService = new CategoryService();
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    try {
      const { categoryId, promotionId, ...productData } = createProductDto;

      const category: Category | undefined =
        await this.categoryService.getCategoryById(categoryId);
      if (!category) {
        throw new CategoryException("Category not found", 404);
      }

      let promotion: Promotion | undefined = undefined;
      if (promotionId) {
        promotion = { promotionId } as Promotion; 
      }

      const newProduct = productRepository.create({
        ...productData,
        category, 
        promotion, 
      });

      return await productRepository.save(newProduct);
    } catch (error) {
      throw new ProductException("Error creating product", 500);
    }
  }

  async getAllProducts(): Promise<Product[]> {
    try {
      return await productRepository.find();
    } catch (error) {
      throw new ProductException("Error getting all products", 500);
    }
  }

  async getProductById(productId: string): Promise<Product> {
    try {
      const product = await productRepository.findOne({ where: { productId } });

      if (!product) {
        throw new ProductException("Product not found", 404);
      }

      return product;
    } catch (error) {
      throw new ProductException("Error getting a product by id", 500);
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

  async getProductsWithPromotion(): Promise<Product[]> {
    try {
      const products = await productRepository.find({
        where: { promotion: Not(IsNull()) },
      });

      return products;
    } catch (error) {
      throw new ProductException("Error getting products in promotion", 500);
    }
  }
}
