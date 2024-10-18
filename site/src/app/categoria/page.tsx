"use client"

import { useState } from "react"
import FilterPanel from "./components/FilterPanel.component"
import ProductsPanel from "./components/ProductsPanel.component"
import { Product } from "../types/Product.type"
import { useSearchParams } from "next/navigation"
import { strForDisplay } from "../utils/functions.utils"
import { Fields } from "./types/page.types"
import useGetProducts from "./hooks/useGetProducts.hook"
import useFilterProducts from "./hooks/useFilterProducts.hook"
import useResetFilters from "./hooks/useResetFilters.hook"

const formInitialState = {
  price: 99999,
  brand: [],
  discount: false,
}

export default function CategoriaPage() {
  const [currentProducts, setCurrentProducts] = useState<Product[]>([])
  const [formValues, setFormValues] = useState<Fields>(formInitialState)

  const searchParams = useSearchParams()
  const currentCategory = strForDisplay(
    searchParams.get("name") || "unknown category",
  )

  const source = useGetProducts(currentCategory)

  useFilterProducts(source, formValues, setCurrentProducts)
  useResetFilters(formInitialState, currentCategory, setFormValues)

  return (
    <div className="w-full pt-24">
      <div className="mx-auto flex max-w-[1000px] justify-between gap-20 pt-20 lg:gap-10 lg:px-10">
        <FilterPanel
          setFormValues={setFormValues}
          formValues={formValues}
          setCurrentProducts={setCurrentProducts}
          currentCategory={currentCategory}
          source={source}
        />
        <ProductsPanel
          products={currentProducts}
          currentCategory={currentCategory}
        />
      </div>
    </div>
  )
}
