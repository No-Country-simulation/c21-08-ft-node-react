export type Category = {
  categoryId: string
  categoryName: string
}

export type Product = {
  productId: string
  name: string
  description: string
  price: number
  imgUrl: string
  category: Category
  stock: number
  brand: null
  promotion?: number
}

export type Promotion = {
  promotionId: string
  percentage: number
  product: Product[]
}

export type ProductWithPromotion = Product & Omit<Promotion, "product">
