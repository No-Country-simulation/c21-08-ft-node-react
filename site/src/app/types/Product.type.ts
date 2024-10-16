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
  promotion?: Promotion
  brand: null
}

export type Promotion = {
  promotionId: string
  percentage: number
  product: Product
}
