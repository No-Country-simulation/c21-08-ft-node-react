"use client"

import Card from "@/app/components/Card/Card.component"
import { useRouter } from "next/navigation"
import Icon from "@/app/components/Icon/Icon.component"
import { ProductsPanelProps } from "../types/page.types"
import { strForDisplay } from "@/app/utils/strFormatting.util"
import { usePathname } from "next/navigation"

const ProductsPanel = ({ products, categoryName }: ProductsPanelProps) => {
  const pathname = usePathname()

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
        <h1 className="text-4xl font-bold">
          {strForDisplay(categoryName || "")}
        </h1>
      </div>
      <span>Mostrando {products.length} productos</span>
      {/* <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(200px,220px))] gap-6 sm:grid-cols-1"> */}
      <div className="grid w-full grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
        {products.map((p, idx) => (
          <Card
            key={`card-${idx}`}
            product={p}
            link={`${pathname}/${p.productId}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductsPanel
