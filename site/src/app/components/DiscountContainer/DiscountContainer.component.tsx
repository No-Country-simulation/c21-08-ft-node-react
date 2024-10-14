'use client'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Product } from '../../types/Product.type'
import { CartContextProvider } from '../../contexts/cart.context'
import Card from '../Card/Card.component'


type DiscountContainerProps = {
  products: Product[]
}

const DiscountContainer = ({ products }: DiscountContainerProps) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 0,
    },
    breakpoints: {
      '(max-width: 800px)': {
        slides: {
          perView: 2, 
          spacing: 5, 
        },
      },
      '(max-width: 640px)': {
        slides: {
          perView: 1, 
          spacing: 5, 
        },
      },
    },
  })
  return (
    <CartContextProvider>
      <div ref={ref} className="keen-slider mx-auto max-w-[1000px] sm:w-[600px] ">
      {products.map((product, index) => (
        <div className='keen-slider__slide flex justify-center w-[240px] m-0 p-0' key={index}>
        <Card
          styleSlider={`number-slice${index + 1}`}
          product={product}
        ></Card></div>
      ))}</div>
    </CartContextProvider>
  )
}

export default DiscountContainer
