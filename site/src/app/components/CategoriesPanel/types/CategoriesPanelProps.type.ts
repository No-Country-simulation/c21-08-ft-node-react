export type Category = {
  categoryId: string
  categoryName: string
}

export type CategoriesPanelProps = {
  changeCategoriesVisibility: () => void
  isCategoriesVisible: boolean
  categories: Category[]
}

