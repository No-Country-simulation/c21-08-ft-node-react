"use client"

import Card from "@/app/components/Card/Card.component"
import { ProductsPanelProps } from "../types/page.types"
import { strForDisplay } from "@/app/utils/strFormatting.util"
import { usePathname } from "next/navigation"
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs.component"

const ProductsPanel = ({ products, categoryName }: ProductsPanelProps) => {
  const pathname = usePathname()

  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex flex-col gap-2">
        <Breadcrumbs />
        <h1 className="text-4xl font-bold">
          {strForDisplay(decodeURIComponent(categoryName) || "")}
        </h1>
      </div>
      <span>Mostrando {products.length} productos</span>
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
