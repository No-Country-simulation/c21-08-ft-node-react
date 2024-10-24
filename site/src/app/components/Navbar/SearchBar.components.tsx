"use client"

import useClickOutside from "@/app/hooks/useClickOutside.hook"
import Icon from "../Icon/Icon.component"
import { useState, useEffect, useRef } from "react"
import { Product, ProductResult } from "@/app/types/Product.type"
import { API_BASE_URL, APP_BASE_URL } from "@/app/consts/api.consts"
import Link from "next/link"
import { strForData } from "@/app/utils/strFormatting.util"
import Fuse from "fuse.js"

const SearchBar = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState<string>("")
  const [results, setResults] = useState<ProductResult[]>([])
  const [showResults, setShowResults] = useState(false)

  const resultsRef = useRef<HTMLDivElement>(null)
  useClickOutside(resultsRef, () => setShowResults(false))

  useEffect(() => {
    const getAllProducts = async () => {
      const res = await fetch(`${API_BASE_URL}/product`)
      const products: Product[] = await res.json()

      setProducts(products)
    }
    getAllProducts()
  }, [])

  useEffect(() => {
    // this can be problematic in the long run because the whole code depends
    // on a value that I don't know for certain when will be updated
    if (!(search.length > 2)) return
    if (!showResults) return

    const fuse = new Fuse(products, { includeScore: true, keys: ["name"] })
    const result = fuse.search(search)

    const sorted = result.sort((a, b) => {
      if (!a.score || !b.score) return 1
      return a.score - b.score
    })

    const filtered = sorted.slice(0, 5).map((p) => p.item)
    setResults(filtered)
  }, [search, products, showResults])

  useEffect(() => {
    if (search.length > 3) {
      setShowResults(true)
    } else {
      setShowResults(false)
    }
  }, [search])

  return (
    <div ref={resultsRef} className="relative">
      <div className="flex items-center">
        <input
          className="relative w-full rounded-md px-4 py-3"
          type="text"
          name=""
          id=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar en Kramer..."
          onFocus={() => {
            if (search === "Buscar en Kramer...") setSearch("")
          }}
        />
        <button className="absolute inset-y-0 right-0 mr-4 bg-white">
          <Icon iconType="search" />
        </button>
      </div>
      <div className="absolute flex w-full flex-col rounded-b-md bg-white shadow-xl">
        {showResults
          ? results.map((r, idx) => {
              const {
                category: { categoryName },
              } = r
              return (
                <Link
                  key={`product-result-${idx}`}
                  className={`px-4 py-3 hover:bg-gray100 ${results.length - 1 === idx ? "rounded-b-md" : ""}`}
                  href={`${APP_BASE_URL}/categoria/${strForData(decodeURIComponent(categoryName))}/${r.productId}`}
                  onClick={() => setResults([])}
                >
                  {r.name}
                </Link>
              )
            })
          : ""}
      </div>
    </div>
  )
}

export default SearchBar
