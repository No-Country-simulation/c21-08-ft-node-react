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
import MobileSearchBar from "./MobileSearchBar.component"

const Navbar = () => {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)
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
      if (user.role === "owner") {
        router.push("/admin") // Redirige a la página de administración
      } else {
        router.push("/profile") // Redirige a la página de perfil para otros usuarios
      }
    } else {
      router.push("/auth") // Redirige a la página de autenticación si no hay usuario
    }
  }

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b-[1px] border-solid border-gray300 bg-gray100">
        <div className="mx-auto flex min-h-24 max-w-[1000px] items-center justify-between lg:gap-6 lg:px-10 md:gap-3 md:px-5">
          <Logo />
          <nav className="flex gap-5">
            <div className="xs:hidden">
              <SearchBar />
            </div>
            <div className="flex hidden items-center xs:flex">
              <button onClick={() => setShowMobileSearch((prev) => !prev)}>
                <Icon iconType="search" />
              </button>
              {showMobileSearch && <MobileSearchBar />}
            </div>
            <ul className="flex items-center gap-6 sm:gap-2">
              <li className="flex gap-2">
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
                  user.role === "owner" ? (
                    <span className="sm:hidden">{user.name} - Panel Admin</span>
                  ) : (
                    <span className="sm:hidden">{user.name}</span>
                  )
                ) : (
                  <span className="sm:hidden">Iniciar sesión</span>
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
