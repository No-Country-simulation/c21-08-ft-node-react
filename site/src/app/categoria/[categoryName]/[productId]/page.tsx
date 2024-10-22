import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs.component"
import Image from "next/image"
import { IMG_WIDTH, IMG_HEIGHT } from "@/app/consts/sizes.consts"
import { API_BASE_URL } from "@/app/consts/api.consts"
import Icon from "@/app/components/Icon/Icon.component"
import { Product } from "@/app/types/Product.type"
import RelatedProductsContainer from "./components/RelatedProductsContainer/RelatedProductsContainer.component"
import Price from "@/app/components/Price/Price.component"
import AddButton from "@/app/components/AddButton/AddButton.component"

const getProduct = async (productId: string | undefined) => {
  const res = await fetch(`${API_BASE_URL}/product/${productId}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })

  const product: Product = await res.json()
  return product
}

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product = await getProduct(params.productId)

  return (
    <main className="w-full pt-24">
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
          <div className="flex w-40 flex-1 flex-col gap-6">
            <h1 className="font-bold">{product.name}</h1>
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
            <p>
              {product.description} Lorizzle rizzle dolizzle cool amizzle,
              consectetuer adipiscing elit. Nullam sapien velizzle, mammasay
              mammasa mamma oo sa volutpat, suscipizzle quizzle, gravida vizzle,
              shizzlin dizzle
            </p>
            <div className="flex items-center justify-between">
              <Price price={product.price} size="L" />
              <AddButton product={product} withIcon />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-10 border-t-2 border-solid border-gray300 pt-10">
          <h2 className="text-2xl font-bold">También te podría gustar</h2>
          <RelatedProductsContainer product={product} />
        </section>
      </div>
    </main>
  )
}

export default ProductPage
