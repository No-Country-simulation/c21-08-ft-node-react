"use client"

import { useEffect, useState } from "react"
import FilterPanel from "./components/FilterPanel.component"
import ProductsPanel from "./components/ProductsPanel.component"
import { Product } from "../types/Product.type"
import { useSearchParams } from "next/navigation"
import { strParseOut } from "../utils/functions.utils"
import { Fields } from "./types/page.types"
import useDiscountedByCategory from "./hooks/useDiscountedByCategory.hook"
import useProductsByCategory from "./hooks/useProductsByCategory.hook"

export default function CategoriaPage() {
  const [currentProducts, setCurrentProducts] = useState<Product[]>([])

  const [formValues, setFormValues] = useState<Fields>({
    price: 9999,
    brand: [],
    discount: false,
  })

  const searchParams = useSearchParams()
  const currentCategory = strParseOut(
    searchParams.get("name") || "unknown category",
  )

  const productsByCategory = useProductsByCategory(currentCategory)
  const discountedProducts = useDiscountedByCategory(currentCategory)

  // const filterByPrice = (products: Product[], price: number) => {
  //   const filtered = products.filter((p) => {
  //     console.log(
  //       "comparing prices: ",
  //       Number(price),
  //       p.price,
  //       Number(p.price) < Number(price),
  //     )
  //     return Number(p.price) < Number(price)
  //   })
  //   console.log("filtered: ", filtered)
  //   setCurrentProducts(filtered)
  // }

  useEffect(() => {
    if (formValues.discount) {
      setCurrentProducts(discountedProducts)
    } else {
      setCurrentProducts(productsByCategory)
    }
  }, [formValues.discount, productsByCategory, discountedProducts])

  // useEffect(() => {
  //   console.log("price has changed!", formValues.price)
  //   const filtered = filterByPrice(currentProducts, formValues.price)
  //   setCurrentProducts(filtered)
  // }, [formValues.price])

  // useEffect(() => {
  //   console.log("currentProducts: ", currentProducts)
  // }, [currentProducts])
  //
  useEffect(() => {
    console.log("formValues: ", formValues)
  }, [formValues])

  return (
    <div className="w-full pt-24">
      <div className="mx-auto flex max-w-[1000px] justify-between gap-20 pt-20">
        <FilterPanel
          setFormValues={setFormValues}
          setCurrentProducts={setCurrentProducts}
        />
        <ProductsPanel products={currentProducts} />
      </div>
    </div>
  )
}
