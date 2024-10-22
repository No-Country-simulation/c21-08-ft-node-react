import { Category } from "./Category.type"

export type Product = {
  productId: string
  name: string
  description: string
  price: number
  imgUrl: string
  category: Category
  stock: number
  brand: string
  promotion?: number
}

export type Promotion = {
  promotionId: string
  percentage: number
  product: Product[]
}

export type ProductWithPromotion = Product & Omit<Promotion, "product">
