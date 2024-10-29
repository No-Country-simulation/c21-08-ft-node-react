import { Product } from "../entities/Product.entity";
interface RecipeQuery {
  recipequery?: string;
}

export const getPrompt = (currentStock: Product[], query: RecipeQuery) => {
  const productNames = currentStock.map((product) => product.name).join(", ");

  return `
Soy el dueño de un minimarket local. Este es mi inventario de productos: ${productNames}.
Mi cliente quiere preparar "${query.recipequery}". ¿Qué ingredientes necesitaría para prepararlo?

Tu respuesta debe contener **exactamente** 3 arrays en formato JavaScript:

1. Un array con **todos los ingredientes** necesarios para preparar el plato.
2. Un array con los ingredientes que **yo poseo** en mi inventario y que también están en el primer array.
3. Un array con las **instrucciones de preparación**, resumidas en **un máximo de 5 pasos**.

**Formato de tu respuesta:**

allIngredients
["aquí van todos los ingredientes, cada item entre doble comillas"]

owned
["aquí van los ingredientes que yo tengo en mi inventario y que también aparecen en el array anterior, cada item entre doble comillas"]

instructions
["aquí van las instrucciones de preparación, cada item entre doble comillas"]
`;
};
