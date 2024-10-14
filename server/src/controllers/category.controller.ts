import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";

export class CategoryController {
  private readonly categoryService: CategoryService;
  constructor() {
    this.categoryService = new CategoryService();
  }

  async getAllCategories(req: Request, res: Response): Promise<any> {
    try {
      const categories = await this.categoryService.getAllCategories();

      return res.json(categories);
    } catch (error) {
      return res
        .status(502)
        .json({ message: "Error getting all categories", error: 502 });
    }
  }
}
