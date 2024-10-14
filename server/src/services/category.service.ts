import { categoryRepository } from "../repositories/category.repository";

export class CategoryService {
  async getAllCategories() {
    try {
      return await categoryRepository.find();
    } catch (error) {
      console.error(error);
      throw new Error("Error getting all categories");
    }
  }
}
