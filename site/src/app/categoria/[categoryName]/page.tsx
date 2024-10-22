"use client"

import { useState } from "react"
import FilterPanel from "./components/FilterPanel.component"
import ProductsPanel from "./components/ProductsPanel.component"
import { Product } from "../../types/Product.type"
import { useParams, useSearchParams } from "next/navigation"
import { strForDisplay } from "@/app/utils/strFormatting.util"
import { Fields } from "./types/page.types"
import useFilterProducts from "./hooks/useFilterProducts.hook"
import useResetFilters from "./hooks/useResetFilters.hook"
import useFetch from "@/app/hooks/useFetch.hook"
import { API_BASE_URL } from "@/app/consts/api.consts"

const formInitialState = {
  price: 99999,
  brand: [],
  discount: false,
}

export default function CategoriaPage() {
  const [currentProducts, setCurrentProducts] = useState<Product[]>([])
  const [formValues, setFormValues] = useState<Fields>(formInitialState)
  const params = useParams<{ categoryName: string }>()
  const searchParams = useSearchParams()
  const categoryName = strForDisplay(params.categoryName)

  const products =
    useFetch<Product[]>(
      `${API_BASE_URL}/product/category/${searchParams.get("categoryid")}`,
    ) || ([] as Product[])

  useFilterProducts(products, formValues, setCurrentProducts)
  useResetFilters(formInitialState, categoryName, setFormValues)

  return (
    <main className="w-full pt-24">
      <div className="mx-auto flex max-w-[1000px] justify-between gap-20 pt-20 lg:gap-10 lg:px-10">
        <FilterPanel
          setFormValues={setFormValues}
          formValues={formValues}
          setCurrentProducts={setCurrentProducts}
          categoryName={categoryName}
          source={products}
        />
        <ProductsPanel products={currentProducts} categoryName={categoryName} />
      </div>
    </main>
  )
}
