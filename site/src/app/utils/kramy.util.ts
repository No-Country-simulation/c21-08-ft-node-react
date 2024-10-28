export const splitIngredients = (ingredients: string[]) => {
  console.log("ingredients: ", ingredients)
  const l = ingredients.length
  const half = Math.round(l / 2)
  const firstRow = ingredients.slice(0, half - 1)
  console.log("firstRow: ", firstRow)
  const secondRow = ingredients.slice(half)
  console.log("secondRow: ", secondRow)
  return [firstRow, secondRow]
}
