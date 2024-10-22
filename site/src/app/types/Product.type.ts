import { Category } from "./Category.type"
import { Promotion } from "./Promotion.type"

export type Product = {
  productId: string
  name: string
  description: string
  price: number
  imgUrl: string
  category: Category
  stock: number
  brand: string
  promotion: Promotion | null
}
