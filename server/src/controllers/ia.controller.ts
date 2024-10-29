import { Request, Response } from "express";
import { ProductService } from "../services/product.service";
import { UserException } from "../exceptions/UserException";
import { CohereClient } from "cohere-ai";
import { getPrompt } from "../utils/prompt";

interface RecipeQuery {
  recipequery?: string;
}

const cohere = new CohereClient({ token: process.env.COHERE_API_KEY });

async function chatWithCohere(userPrompt: string) {
  const res = await cohere.chat({
    model: "command-r-plus",
    message: userPrompt,
  });

  return res;
}

export class IaController {
  private productServices = new ProductService();

  async recipe(req: Request, res: Response): Promise<any> {
    try {
      const recipeQuery = req.query.recipequery;

      const products = await this.productServices.getAllProducts();

      const prompt = getPrompt(products, recipeQuery as RecipeQuery);

      const response = await chatWithCohere(prompt);

      const regex = /\[([\s\S]*?)\]/g;
      const matches = response.text.match(regex);
      if (!matches)
        throw new Error(`there was an error trying to parse the response`);
      const arrays = matches.map((m) => JSON.parse(m));

      const payload = {
        recipe: recipeQuery,
        allIngredients: arrays[0],
        owned: arrays[1],
        instructions: arrays[2],
      };

      return res.status(200).json({ response: payload });
    } catch (error) {
      if (error instanceof UserException) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
