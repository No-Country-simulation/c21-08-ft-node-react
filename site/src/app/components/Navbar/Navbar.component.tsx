'use client'

import Icon from '../Icon/Icon.component'
import Cart from '../Cart/Cart.component'
import { useState } from 'react'
import CartButton from './CartButton.component'
import CategoriesPanel from '../CategoriesPanel/CategoriesPanel.component'
import Logo from './Logo.component'
import CategoriesButton from './CategoriesButton.component'

const Navbar = () => {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false)

  const changeCartVisibility = () => {
    if (isCategoriesVisible) setIsCategoriesVisible(false)
    setIsCartVisible(prevIsCartVisible => !prevIsCartVisible)
  }

  const changeCategoriesVisibility = () => {
    if (isCartVisible) setIsCartVisible(false)
    setIsCategoriesVisible(prevIsCategoriesVisible => !prevIsCategoriesVisible)
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-gray100">
      <div className="mx-auto flex min-h-24 max-w-[1000px] items-center justify-between">
        <Logo />
        <div className="flex items-center">
          <input className="py-1 pl-1" type="text" name="" id="" />
          <button className="bg-white py-1 pr-1">
            <Icon iconType="search" />
          </button>
        </div>
        <nav>
          <ul className="flex gap-4">
            <li className="flex gap-2">
              <CategoriesButton
                changeCategoriesVisibility={changeCategoriesVisibility}
              />
              <CategoriesPanel
                changeCategoriesVisibility={changeCategoriesVisibility}
                isCategoriesVisible={isCategoriesVisible}
              />
            </li>
            <li className="flex gap-2">
              <Icon iconType="user" />
              <span>Joel</span>
            </li>
            <li className="flex gap-2">
              <CartButton changeCartVisibility={changeCartVisibility} />
              <Cart
                changeCartVisibility={changeCartVisibility}
                isCartVisible={isCartVisible}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
