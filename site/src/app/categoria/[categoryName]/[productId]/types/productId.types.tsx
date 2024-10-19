type ProductPageParams = "categoryName" | "productId"
export type ProductPageProps = {
  params?: {
    [key in ProductPageParams]: string
  }
}
