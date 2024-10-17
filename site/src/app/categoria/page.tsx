"use client"

import { useEffect, useState } from "react"
import FilterPanel from "./components/FilterPanel.component"
import ProductsPanel from "./components/ProductsPanel.component"
import { Product } from "../types/Product.type"
import { useSearchParams, useParams } from "next/navigation"
import { strParseOut } from "../utils/functions.utils"
import { Fields } from "./types/page.types"
import useGetProducts from "./hooks/useGetProducts.hook"

const formInitialState = {
  price: 99999,
  brand: [],
  discount: false,
}

export default function CategoriaPage() {
  const [currentProducts, setCurrentProducts] = useState<Product[]>([])

  const [formValues, setFormValues] = useState<Fields>(formInitialState)

  const searchParams = useSearchParams()
  const currentCategory = strParseOut(
    searchParams.get("name") || "unknown category",
  )
  const source = useGetProducts(currentCategory)
  // console.log("source: ", source)

  const filterByPrice = (price: number) => {
    const filtered = source.filter((p) => {
      return Number(p.price) <= Number(price)
    })
    return filtered
  }

  const filterByDiscount = (products: Product[]) => {
    return products.filter((p) => p.promotion)
  }

  // useEffect(() => {
  //   if (formValues.discount) {
  //     setCurrentProducts(filterByDiscount(source))
  //   } else {
  //     setCurrentProducts(source)
  //   }
  // }, [formValues.discount, source])

  // useEffect(() => {
  //   console.log("price has changed!", formValues.price)
  //   const filtered = filterByPrice(formValues.price)
  //   setCurrentProducts(filtered)
  // }, [formValues.price])

  useEffect(() => {
    const byBrand = formValues.brand.length
      ? source.filter((p) => formValues.brand.includes(p.brand))
      : source

    const byPrice = byBrand.filter(
      (p) => Number(p.price) <= Number(formValues.price),
    )

    const byDiscount = formValues.discount
      ? byPrice.filter((p) => p.promotion)
      : byPrice

    setCurrentProducts(byDiscount)
  }, [formValues, source])

  useEffect(() => {
    setFormValues(formInitialState)
    setCurrentProducts(source)
  }, [currentCategory])

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
