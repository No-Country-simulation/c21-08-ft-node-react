import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs.component"
import { Product, Promotion } from "@/app/types/Product.type"
import Image from "next/image"
import { ProductPageProps } from "./types/productId.types"

async function getProducts() {
  const productsRes = await fetch("http://localhost:3170/product")
  const products: Product[] = await productsRes.json()
  const productsByCategory = products.filter(
    (p) => p.category.categoryName.toLowerCase() === category.toLowerCase(),
  )

  const promotionsRes = await fetch("http://localhost:3170/promotion")
  const promotions: Promotion[] = await promotionsRes.json()

  const productsWithDiscount = promotions
    .map((prom) => {
      const withPromotion = prom.product.map((prod) => ({
        ...prod,
        promotion: prom.percentage / 100,
      }))
      return withPromotion
    })
    .flat()

  const finalProducts = productsByCategory.map((p) => {
    const discounted = productsWithDiscount.find(
      (pd) => pd.productId === p.productId,
    )

    return discounted || p
  })

  return finalProducts
}

const ProductPage = ({ searchParams, params }: ProductPageProps) => {
  console.log("searchParams: ", searchParams)
  console.log("params: ", params)
  return (
    <div className="w-full pt-24">
      <div className="mx-auto flex max-w-[1000px] justify-between gap-20 pt-20 lg:gap-10 lg:px-10">
        <Breadcrumbs />
        <section>
          {/* <Image */}
          {/*   alt={alt} */}
          {/*   src={src || "/images/product-placeholder.webp"} */}
          {/*   width={width} */}
          {/*   height={height} */}
          {/*   className="z-50 border border-solid border-gray1000" */}
          {/* /> */}
        </section>
        <section></section>
      </div>
    </div>
  )
}

export default ProductPage
