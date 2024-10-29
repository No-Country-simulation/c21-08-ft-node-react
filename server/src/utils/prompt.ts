import { Product } from "../entities/Product.entity";
interface RecipeQuery {
  recipequery?: string;
}

export const getPrompt = (currentStock: Product[], query: RecipeQuery) => {
  return `
soy el dueño de un minimarket local, este es mi inventario de productos: ${currentStock.join(
    ","
  )}.
Mi cliente quiere preparar "${query}", ¿qué ingredientes necesitaría para preparalo? tu respuesta solo
deberá contener 3 arryas (tipo javascript): \n
un array con todos los ingredientes para preparar el plato,
un array con los ingredientes para preparar el plato de los que yo poseo en mi inventario, y finalmente
un array con las instrucciones de preparación, estas instrucciones deben ser como máximo 5 y deben estar muy resumidas.\n
Solo quiero estos 3 arrays, nada más. \n
Este debe ser el formato de tu respuesta: \n
all ingredients\n
[aqui van todos los ingredientes, cada item entre doble comillas]\n
\n
owned
[aqui van los ingredientes que yo tengo en mi inventario y que asu vez aparecen en el array anterior, cada item entre doble comillas]\n
\n
instructions
[aqui van las instrucciones de preparación, cada item entre doble comillas]
`;
};
