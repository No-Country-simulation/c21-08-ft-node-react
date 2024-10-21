import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs.component"
import Image from "next/image"
import { ProductPageProps } from "./types/productId.types"
import { IMG_WIDTH, IMG_HEIGHT } from "@/app/consts/sizes.consts"
import Icon from "@/app/components/Icon/Icon.component"
import { Product } from "@/app/types/Product.type"
import CarouselContainer from "@/app/components/CarouselContainer/CarouselContainer.component"
import Card from "@/app/components/Card/Card.component"
import { IsClientProvider } from "@/app/contexts/isClient.context"
import { strForData } from "@/app/utils/functions.utils"

const getProduct = async (productId: string | undefined) => {
  const res = await fetch(`http://localhost:3170/product/${productId}`)
  const [product]: Product[] = await res.json()
  return product
}

const getRelatedPrducts = async (productId: string, categoryId: string) => {
  const res = await fetch(
    `http://localhost:3170/product/category/${categoryId}`,
  )
  const productsByCategory: Product[] = await res.json()
  const remainingProducts = productsByCategory.filter(
    (p) => p.productId !== productId,
  )
  return [...remainingProducts, ...remainingProducts, ...remainingProducts]
}

const ProductPage = async ({ params }: ProductPageProps) => {
  // according to typescript 'params' can be undefined, what should we do
  // if that is the case? until now I didn't find a situation in which
  // params in undefined
  const product = await getProduct(params?.productId)
  const relatedProducts = await getRelatedPrducts(
    params?.productId as string,
    product.category.categoryId,
  )

  return (
    <div className="w-full pt-24">
      <div className="mx-auto flex max-w-[1000px] flex-col justify-between gap-20 pt-20 lg:gap-10 lg:px-10">
        <Breadcrumbs />
        <section className="flex gap-20">
          <div className="w-60 flex-1">
            <Image
              alt={product.description}
              src={"/images/product-placeholder.webp"}
              width={IMG_WIDTH}
              height={IMG_HEIGHT}
              className="z-50 border border-solid border-gray1000"
            />
          </div>
          <div className="w-40 flex-1">
            <h1 className="font-bold">{product.name}</h1>
            <div className="flex gap-2 bg-gray-400 p-2">
              <span>En stock</span>
              <Icon iconType="check" />
            </div>
            <p>{product.description}</p>
            <div></div>
          </div>
        </section>
        <section className="flex flex-col gap-10 border-t-2 border-solid border-gray300 pt-10">
          <h2 className="text-2xl font-bold">También te podría gustar</h2>
          <IsClientProvider>
            <CarouselContainer>
              {relatedProducts.map((p, idx) => (
                <Card
                  key={`products-${idx}`}
                  additionalStyles="keen-slider__slide"
                  product={p}
                  link={`/categoria/${strForData(p.category.categoryName)}/${p.productId}`}
                />
              ))}
            </CarouselContainer>
          </IsClientProvider>
        </section>
      </div>
    </div>
  )
}

export default ProductPage