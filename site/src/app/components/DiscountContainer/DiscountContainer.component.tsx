"use client"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { useEffect, useState } from "react"
import Card from "../Card/Card.component"
import { products } from "../../../mocks/products.mock"
import { Product } from "@/app/types/Product.type"

const DiscountContainer = () => {
  const [discountProducts, setDiscountProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    setLoading(true)
    const getDiscountedProducts = async () => {
      try {
        const mokdata = products
        setDiscountProducts(mokdata)
      } catch (error) {
        console.log("error fetching data", error)
      } finally {
        setLoading(false)
      }
    }
    getDiscountedProducts()
  }, [])
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4.2,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 920px)": {
        slides: {
          perView: 3.2,
          spacing: 5,
        },
      },
      "(max-width: 760px)": {
        slides: {
          perView: 2.3,
          spacing: 5,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1.4,
          spacing: 10,
        },
      },
      "(max-width: 500px)": {
        slides: {
          perView: 1.1,
          spacing: 10,
        },
      },
      "(max-width: 420px)": {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
    },
  })
  if (loading) return <h3>loading</h3>
  return (
      <div
        ref={ref}
        className="keen-slider mx-auto max-w-[1000px] sm:w-[600px]"
      >
        {discountProducts.map((product, index) => (
          <div
            className="keen-slider__slide m-0 flex w-[240px] justify-center p-0"
            key={index}
          >
            <Card product={product} width={"fixed"}></Card>
          </div>
        ))}
      </div>
  )
}

export default DiscountContainer
