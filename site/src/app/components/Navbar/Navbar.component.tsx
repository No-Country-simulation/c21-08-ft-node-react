'use client'

import Icon from '../Icon/Icon.component'
import Image from 'next/image'
import Link from 'next/link'
import Cart from '../Cart/Cart.component'
import { useState } from 'react'
import { CartContextProvider } from '@/app/contexts/cart.context'
import CartButton from './CartButton.component'
import CategoriesPanel from '../CategoriesPanel/CategoriesPanel.component'
import Logo from './Logo.component'

const Navbar = () => {
  const [isCartVisible, setIsCartVisible] = useState(false)

  const changeCartVisibility = () => {
    setIsCartVisible(prevIsCartVisible => !prevIsCartVisible)
  }

  return (
    <div className='fixed z-[100] flex w-full items-center bg-gray100'>
      <nav className='bg-gray m-auto flex h-24 w-[1000px] justify-between gap-9 border border-t-4'>
        <Logo />
        <div className='relative flex flex-1 items-center'>
          <input type='text' className='h-10 w-full rounded border border-gray-300' />
          <div className='absolute end-0'>
            <Icon iconType='search' />
          </div>
        </div>
        <div className='flex flex-1 items-center justify-end gap-4'>
          <div className='flex items-center gap-2'>
            <Icon iconType='category' />
            <span>Categorías</span>
          </div>
          <div className='flex items-center gap-2'>
            <Icon iconType='user' />
            <span>Joel</span>
          </div>
          <div className='flex items-center gap-2'>
            <CartContextProvider>
              <CartButton changeCartVisibility={changeCartVisibility} />
              {isCartVisible && (
                <Cart changeCartVisibility={changeCartVisibility} isCartVisible={isCartVisible} />
              )}
            </CartContextProvider>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
