"use client"

import Card from "@/app/components/Card/Card.component"
import { useSearchParams } from "next/navigation"
import { strParseOut } from "@/app/utils/functions.utils"
import { useRouter } from "next/navigation"
import Icon from "@/app/components/Icon/Icon.component"
import { products } from "@/mocks/products.mock"

const ProductsPanel = () => {
  const searchParams = useSearchParams()
  const currentCategory = strParseOut(
    searchParams.get("name") || "unknown category",
  )
  const router = useRouter()

  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex flex-col gap-2">
        <span
          className="flex cursor-pointer items-center gap-1"
          onClick={() => router.back()}
        >
          <Icon iconType="chev" style="-rotate-90 h-5" />
          <button>Página de inicio</button>
        </span>
        <h3 className="text-4xl font-bold">{currentCategory}</h3>
      </div>
      <span>Mostrando 16 productos</span>
      {/* <div>...</div> */}
      <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(200px,220px))] gap-6 sm:grid-cols-1">
        {products.map((p, idx) => (
          <Card key={`card-${idx}`} product={p} width="fluid" />
        ))}
      </div>
    </div>
  )
}

export default ProductsPanel
