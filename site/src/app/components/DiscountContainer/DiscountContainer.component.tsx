'use client'
// import 'keen-slider/keen-slider.min.css'
// import { useKeenSlider } from 'keen-slider/react'
import { Product } from '../../types/Product.type'
// import { useEffect, useState } from 'react'
import { CartContextProvider } from '../../contexts/cart.context'
import Card from '../Card/Card.component'
// import { products as productsMocks } from '../../../mocks/products.mock'
//consultar como sabemos los productos por descuento? por que si es un endponit especifico que nos trae
//los productos con descuento aplicado modificar los types para decirle de que tipo es el useEffect, un array
//de productos que tienen promocion

//cambiar el console.log por loggers

type DiscountContainerProps = {
  products: Product[]
}

const DiscountContainer = ({ products }: DiscountContainerProps) => {
  // const [ref] = useKeenSlider<HTMLDivElement>({
  //   slides: {
  //     perView: 2,
  //     spacing: 15,
  //   },
  // })
  return (
    <CartContextProvider>
      {products.map((product, index) => (
        <Card
          styleSlider={`keen-slider__slide number-slice${index + 1}`}
          key={product.productID}
          product={product}
        ></Card>
      ))}
    </CartContextProvider>
  )
}

export default DiscountContainer
