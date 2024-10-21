"use client"

import Icon from "../Icon/Icon.component"
import { useEffect } from "react"
import Cart from "../Cart/Cart.component"
import { useState } from "react"
import CartButton from "./CartButton.component"
import CategoriesPanel from "../CategoriesPanel/CategoriesPanel.component"
import Logo from "./Logo.component"
import CategoriesButton from "./CategoriesButton.component"
import useFetch from "@/app/hooks/useFetch.hook"
import { API_BASE_URL } from "@/app/consts/api.consts"
import { Category as CategoryType } from "@/app/types/Product.type"
import Menu from "./Menu.components"
import SearchBar from "./SearchBar.components"
import MenuButton from "./MenuButton.component"

const Navbar = () => {
  const categories = useFetch<CategoryType[]>(`${API_BASE_URL}/category`) || []

  const [isCartVisible, setIsCartVisible] = useState(false)
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const changeMenuVisibility = () => {
    if (isCartVisible) setIsCartVisible((prev) => !prev)
    if (isCategoriesVisible) setIsCategoriesVisible((prev) => !prev)
    setIsMenuVisible((prevState) => !prevState)
  }

  const changeCartVisibility = () => {
    if (isCategoriesVisible) setIsCategoriesVisible(false)
    if (isMenuVisible) setIsMenuVisible(false)
    setIsCartVisible((prevIsCartVisible) => !prevIsCartVisible)
  }

  const changeCategoriesVisibility = () => {
    if (isCartVisible) setIsCartVisible(false)
    if (isMenuVisible) setIsMenuVisible(false)
    setIsCategoriesVisible((prev) => !prev)
  }

  useEffect(() => {
    setIsCategoriesVisible(false)
  }, [])

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-gray100">
        <div className="mx-auto flex min-h-24 max-w-[1000px] items-center justify-between">
          <MenuButton changeMenuVisibility={changeMenuVisibility} />
          <Logo />
          <SearchBar />
          <nav>
            <ul className="flex gap-4">
              <li className="flex gap-2 xs:hidden">
                <CategoriesButton
                  changeCategoriesVisibility={changeCategoriesVisibility}
                />
              </li>
              <li className="flex gap-2 xs:hidden">
                <Icon iconType="user" />
                <span className="sm:hidden xs:inline">Joel</span>
              </li>
              <li className="flex gap-2">
                <CartButton changeCartVisibility={changeCartVisibility} />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <CategoriesPanel
        changeCategoriesVisibility={changeCategoriesVisibility}
        isCategoriesVisible={isCategoriesVisible}
        categories={categories}
      />
      <Cart
        changeCartVisibility={changeCartVisibility}
        isCartVisible={isCartVisible}
        style="fixed"
      />
      <Menu
        isMenuVisible={isMenuVisible}
        changeCategoriesVisibility={changeCategoriesVisibility}
      />
    </>
  )
}

export default Navbar
