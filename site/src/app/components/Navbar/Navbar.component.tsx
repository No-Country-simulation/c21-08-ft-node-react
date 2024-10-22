"use client"

import Icon from "../Icon/Icon.component"
import { useEffect } from "react"
import Cart from "../Cart/Cart.component"
import { useState } from "react"
import CartButton from "./CartButton.component"
import CategoriesPanel from "../CategoriesPanel/CategoriesPanel.component"
import Logo from "./Logo.component"
import CategoriesButton from "./CategoriesButton.component"
import { HamburgerButton } from "./hamburger.component"
import { usePathname, useSearchParams } from "next/navigation"
import useFetch from "@/app/hooks/useFetch.hook"
import { API_BASE_URL } from "@/app/consts/api.consts"
import { Category as CategoryType } from "@/app/types/Product.type"

const Navbar = () => {
  const categories = useFetch<CategoryType[]>(`${API_BASE_URL}/category`) || []
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("name")

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
  }, [pathname, currentCategory])

  return (
    <header className="fixed top-0 z-50 w-full border-b-2 border-solid border-gray300 bg-gray100">
      <div className="mx-auto flex min-h-24 w-full max-w-[1000px] items-center justify-between">
        <nav className="mx-auto flex w-full items-center justify-between md:px-[8%] xs:p-1">
          <HamburgerButton
            changeCategoriesVisibility={changeCategoriesVisibility}
            isMenuVisible={isMenuVisible}
            changeMenuVisibility={changeMenuVisibility}
          ></HamburgerButton>
          <Logo />
          <div className="relative mx-2 flex items-center">
            <input type="text" name="" id="" />
            <button className="bg-white py-1 pr-1">
              <Icon iconType="search" />
            </button>
          </div>
          <div className="flex">
            <div className="mx-2 xs:hidden">
              <ul className="flex gap-2 md:gap-4">
                <li className="flex gap-2">
                  <CategoriesButton
                    changeCategoriesVisibility={changeCategoriesVisibility}
                  />
                  <CategoriesPanel
                    changeCategoriesVisibility={changeCategoriesVisibility}
                    isCategoriesVisible={isCategoriesVisible}
                    categories={categories}
                  />
                </li>
                <li className="flex gap-2">
                  <Icon iconType="user" />
                  <span className="sm:hidden">Joel</span>
                </li>{" "}
              </ul>
            </div>
            <ul className="ms-2">
              <li className="flex gap-2">
                <CartButton changeCartVisibility={changeCartVisibility} />
                <Cart
                  display="cart"
                  changeCartVisibility={changeCartVisibility}
                  isCartVisible={isCartVisible}
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
