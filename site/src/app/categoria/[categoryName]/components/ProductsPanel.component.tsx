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
    <div className="flex w-full flex-col gap-4 px-4 xs:gap-2 xs:px-2">
      <div className="flex flex-col gap-2">
        <span
          className="flex cursor-pointer items-center gap-1"
          onClick={() => router.back()}
        >
          <Icon iconType="chev" style="-rotate-90 h-5" />
          <button>Página de inicio</button>
        </span>
        <h1 className="text-4xl font-bold sm:text-3xl xs:text-2xl">
          {strForDisplay(decodeURIComponent(categoryName) || "")}
        </h1>
      </div>
      <span className="sm:text-sm xs:text-xs">Mostrando {products.length} productos</span>
      <div className="grid w-full grid-cols-3 gap-4 md:grid-cols-2 xs:gap-2">
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
