'use client'
import { CardProps } from './types/CardProps.type'
import { useContext, useState } from 'react'
import Price from '../Price/Price.component'
import Icon from '../Icon/Icon.component'
import Image from 'next/image'
import { CartContext } from '../../contexts/cart.context'
// import Link from "next/link"; activar cuando usemos la interactividad con otras paginas

//cambiar la prop imgURl cuando tengamos acceso a los enpoint (quitar el ? a la propiedad)
//ver colores de descuento cuando tengamos colores
// agregar la tarjeta link desde el primer div hasta el button para que vaya al detalle del producto
// sumar al handleFavorite la funcion de agregar a la seccion de productos
// agregar al button "agregar al carrito" la funcion de agregar al carrito con el contexto facu

const Card = ({ styleSlider, product }: CardProps) => {
  const [favorite, setFavorite] = useState<boolean>(false)
  const { addToCart, productsInCart } = useContext(CartContext)

  const { name, price, promotion, categoryID } = product

  const handleFavorite = () => {
    setFavorite(prevState => !prevState)
  }

  const handleAddToCart = () => {
    console.log('agregando producto al carrito', product)
    console.log('productos del carro', productsInCart)
    addToCart(product)
  }
  const discountedPrice = promotion ? price - price * promotion.discount : null
  const discount = promotion ? promotion.discount * 100 : null
  return (
    <div
      className={`${styleSlider} flex  w-full max-w-[240px] max-h-[440px] flex-col justify-between border items-center border-black bg-gray200 p-3 sm:max-w-[480px] sm:flex-row sm:items-center `}
    >
      <div className='m-4 flex items-center justify-center sm:w-1/2'>
        <Image
          className='sm:min-w-[120px]'
          src={'/images/product-placeholder.webp'}
          alt={`imagen de ${name}`}
          width={480}
          height={480}
        />
      </div>
      <div className='flex flex-col items-center sm:h-full sm:justify-between sm:py-5'>
        <div className='flex w-[200px] items-center justify-between my-2 sm:my-0'>
          <h3 className='line-clamp-2 text-lg font-bold'>{name}</h3>
          {!favorite ? (
            <button onClick={handleFavorite}>
              <Icon iconType={'heart'}></Icon>
            </button>
          ) : (
            <button onClick={handleFavorite}>
              <Icon iconType={'heartFilled'}></Icon>
            </button>
          )}
        </div>
        <h4 className='me-auto mb-4'>{categoryID}</h4>
        {!discountedPrice ? (
          <div className='mx-1 my-2 flex justify-start w-full'>
            <Price price={price} size={'S'}></Price>
          </div>
        ) : (
          <div className='flex w-full justify-between my-2'>
            <div className='flex-col items-center'>
              <div className='text-xs line-through'>${price}</div>
              <div className='text-base font-bold'>
                <Price price={discountedPrice} size={'S'}></Price>
              </div>
            </div>
            <div className='me-2 flex items-center'>{`%${discount}`}</div>
          </div>
        )}
        <button
          onClick={handleAddToCart}
          className='mx-auto w-40 rounded-full bg-gray1000 px-2 py-1 my-1 font-bold text-white'
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default Card
