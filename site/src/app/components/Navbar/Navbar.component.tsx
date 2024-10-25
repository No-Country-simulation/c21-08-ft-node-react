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
import { IsClientProvider } from "@/app/contexts/isClient.context"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/contexts/auth.context"

const Navbar = () => {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const pathname = usePathname()

  const { user } = useAuth()
  const router = useRouter()

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
    if (isCartVisible)
      setIsCartVisible((prevIsCartVisible) => !prevIsCartVisible)
    if (isCategoriesVisible)
      setIsCategoriesVisible(
        (prevIsCategoriesVisible) => !prevIsCategoriesVisible,
      )
    setIsMenuVisible((prevIsMenuVisible) => !prevIsMenuVisible)
  }

  const changeCartVisibility = () => {
    if (isCategoriesVisible)
      setIsCategoriesVisible(
        (prevIsCategoriesVisible) => !prevIsCategoriesVisible,
      )
    if (isMenuVisible)
      setIsMenuVisible((prevIsMenuVisible) => !prevIsMenuVisible)
    setIsCartVisible((prevIsCartVisible) => !prevIsCartVisible)
  }

  const changeCategoriesVisibility = () => {
    if (isCartVisible)
      setIsCartVisible((prevIsCartVisible) => !prevIsCartVisible)
    if (isMenuVisible)
      setIsMenuVisible((prevIsMenuVisible) => !prevIsMenuVisible)
    setIsCategoriesVisible(
      (prevIsCategoriesVisible) => !prevIsCategoriesVisible,
    )
  }

  const handleUserClick = () => {
    if (user) {
      router.push("/profile")
    } else {
      router.push("/auth/login")
    }
  }

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b-[1px] border-solid border-gray300 bg-gray100">
        <div className="mx-auto flex min-h-24 max-w-[1000px] items-center justify-between lg:gap-6 lg:px-10 md:gap-3 md:px-5 xs:px-1">
          <MenuButton changeMenuVisibility={changeMenuVisibility} />
          <Logo />
          <SearchBar />
          <nav>
            <ul className="flex items-center gap-6">
              <li className="flex gap-2 xs:hidden">
                <CategoriesButton
                  changeCategoriesVisibility={changeCategoriesVisibility}
                />
              </li>
              <li
                className="flex cursor-pointer gap-2"
                onClick={handleUserClick}
              >
                <Icon iconType="user" />
                {user ? (
                  <span className="sm:hidden xs:inline">{user.name}</span> // Muestra el nombre del usuario
                ) : (
                  <span className="sm:hidden xs:inline">Iniciar sesión</span> // Texto alternativo si no hay usuario
                )}
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
      <IsClientProvider>
        <Cart
          changeCartVisibility={changeCartVisibility}
          isCartVisible={isCartVisible}
          display="cart"
        />
      </IsClientProvider>
      <Menu
        isMenuVisible={isMenuVisible}
        changeCategoriesVisibility={changeCategoriesVisibility}
        changeMenuVisibility={changeMenuVisibility}
      />
    </>
  )
}

export default Navbar
