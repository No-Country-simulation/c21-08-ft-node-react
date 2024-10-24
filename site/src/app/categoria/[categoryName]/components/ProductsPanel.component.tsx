"use client"

import Card from "@/app/components/Card/Card.component"
import { ProductsPanelProps } from "../types/page.types"
import { usePathname, useSearchParams } from "next/navigation"

const ProductsPanel = ({ products }: ProductsPanelProps) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const categoryLabel = searchParams.get("categorylabel")

  return (
    <div className="flex w-full flex-col gap-4 px-4 xs:gap-2 xs:px-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold sm:text-3xl xs:text-2xl">
          {categoryLabel}
        </h1>
      </div>
      <span className="sm:text-sm xs:text-xs">
        Mostrando {products.length} productos
      </span>
      <div className="grid w-full grid-cols-3 gap-4 lg:grid-cols-2 md:grid-cols-2 xs:gap-2">
        {products.map((p, idx) => (
          <Card
            key={`card-${idx}`}
            product={p}
            link={`${pathname}/${p.productId}`}
            imgUrl={p.imgUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductsPanel
