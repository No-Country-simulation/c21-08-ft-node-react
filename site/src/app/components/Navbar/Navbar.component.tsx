"use client"

import Icon from "../Icon/Icon.component"
import Cart from "../Cart/Cart.component"
import { useEffect, useState } from "react"
import CartButton from "./CartButton.component"
import CategoriesPanel from "../CategoriesPanel/CategoriesPanel.component"
import Logo from "./Logo.component"
import CategoriesButton from "./CategoriesButton.component"
import Menu from "./Menu.components"
import SearchBar from "./SearchBar.components"
import MenuButton from "./MenuButton.component"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      if (!isMenuVisible) return

      const width = window.innerWidth

      if (width < 450) return

      setIsMenuVisible(false)
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isMenuVisible])

  useEffect(() => {
    setIsMenuVisible(false)
    setIsCartVisible(false)
    setIsCategoriesVisible(false)
  }, [pathname])

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
      />
      <Cart
        changeCartVisibility={changeCartVisibility}
        isCartVisible={isCartVisible}
        display="cart"
      />
      <Menu
        isMenuVisible={isMenuVisible}
        changeCategoriesVisibility={changeCategoriesVisibility}
      />
    </>
  )
}

export default Navbar
