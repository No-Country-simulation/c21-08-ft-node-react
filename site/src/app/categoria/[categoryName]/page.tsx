"use client"

import { useState } from "react"
import FilterPanel from "./components/FilterPanel.component"
import ProductsPanel from "./components/ProductsPanel.component"
import { Product } from "../../types/Product.type"
import { useSearchParams } from "next/navigation"
import { strForDisplay } from "../../utils/functions.utils"
import { Fields } from "./types/page.types"
import useFilterProducts from "./hooks/useFilterProducts.hook"
import useResetFilters from "./hooks/useResetFilters.hook"
import useFetch from "@/app/hooks/useFetch.hook"
import { API_BASE_URL } from "@/app/consts/api.consts"
import { useParams } from "next/navigation"

const formInitialState = {
  price: 99999,
  brand: [],
  discount: false,
}

export default function CategoriaPage() {
  const [currentProducts, setCurrentProducts] = useState<Product[]>([])
  const [formValues, setFormValues] = useState<Fields>(formInitialState)

  const params = useParams()
  const categoryName = strForDisplay(
    (params.categoryName as string) || "unknown category",
  )

  const searchParams = useSearchParams()
  const categoryId = searchParams.get("categoryId")

  const products =
    useFetch<Product[]>(`${API_BASE_URL}/product/category/${categoryId}`) || []

  useFilterProducts(products, formValues, setCurrentProducts)
  useResetFilters(formInitialState, categoryName, setFormValues)

  return (
    <div className="w-full pt-24">
      <div className="mx-auto flex max-w-[1000px] justify-between gap-20 pt-20 lg:gap-10 lg:px-10">
        <FilterPanel
          setFormValues={setFormValues}
          formValues={formValues}
          setCurrentProducts={setCurrentProducts}
          currentCategory={"currentCategory"}
          source={products}
        />
        <ProductsPanel
          products={currentProducts}
          currentCategory={"currentCategory"}
        />
      </div>
    </div>
  )
}
