import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs.component"
import Image from "next/image"
import { IMG_WIDTH, IMG_HEIGHT } from "@/app/consts/sizes.consts"
import { API_BASE_URL, APP_BASE_URL } from "@/app/consts/api.consts"
import Icon from "@/app/components/Icon/Icon.component"
import { Product } from "@/app/types/Product.type"
import RelatedProductsContainer from "./components/RelatedProductsContainer/RelatedProductsContainer.component"
import Price from "@/app/components/Price/Price.component"
import AddButton from "@/app/components/AddButton/AddButton.component"
import { strForData } from "@/app/utils/strFormatting.util"
import { computeDiscount } from "@/app/utils/price.util"

const getProduct = async (productid: string | undefined) => {
  const res = await fetch(`${API_BASE_URL}/product/${productid}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })

  const product: Product = await res.json()

  return product
}

const ProductPage = async ({ params }: { params: { productid: string } }) => {
  const product = await getProduct(params.productid)
  console.log("product: ", product)
  const { categoryId, categoryName } = product.category

  return (
    <main className="w-full pt-24">
      <div className="mx-auto flex max-w-[1000px] flex-col justify-between gap-16 sm:gap-8">
        <Breadcrumbs
          crumbs={[
            {
              label: decodeURIComponent(categoryName),
              path: strForData(
                decodeURIComponent(
                  `${APP_BASE_URL}/categoria/${categoryName}?categoryid=${categoryId}`,
                ),
              ),
            },
          ]}
        />
        <section className="mt-8 flex gap-16 px-8 md:gap-8 sm:flex-col sm:items-center xs:px-4">
          <div className="w-60 flex-1 overflow-hidden rounded-xl sm:w-[90%] xs:w-full">
            <Image
              alt={product.description}
              src={product.imgUrl}
              width={IMG_WIDTH}
              height={IMG_HEIGHT}
            />
          </div>
          <div className="flex w-40 flex-1 flex-col gap-8 md:gap-4 sm:w-[90%] xs:w-full">
            <h1 className="font-bold md:text-[32px] md:leading-[32px] xs:text-[24px] xs:leading-[24px]">
              {product.name}
            </h1>
            <div className="flex gap-2 self-start rounded-md bg-krBlue px-3 py-2 font-bold text-white">
              {product.stock > 0 ? (
                <>
                  <span>En stock</span>
                  <Icon iconType="check" />
                </>
              ) : (
                <>
                  <span>Sin stock</span>
                  <Icon iconType="plus" style="rotate-90" />
                </>
              )}
            </div>
            <p className="md:text-sm md:leading-[22px]">
              {product.description}
            </p>
            <div className="flex items-end justify-between">
              <div>
                <Price
                  price={product.price}
                  size="S"
                  additionalStyles="line-through text-gray-500"
                />
                {product.promotion && (
                  <Price
                    price={computeDiscount(
                      product.price,
                      product.promotion?.percentage,
                    )}
                    size={"L"}
                  />
                )}
              </div>
              <AddButton product={product} withIcon />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-8 border-t-2 border-solid border-gray300 px-8 pt-10 md:px-4">
          <h2 className="text-2xl font-bold">También te podría gustar</h2>
          <RelatedProductsContainer product={product} />
        </section>
      </div>
    </main>
  )
}

export default ProductPage
