import { CategoryException } from "../exceptions/CategoryException";
import { categoryRepository } from "../repositories/category.repository";

export class CategoryService {
  async getAllCategories() {
    try {
      return await categoryRepository.find();
    } catch (error) {
      console.error(error);
      throw new CategoryException("Error getting all categories", 500);
    }
  }
}
