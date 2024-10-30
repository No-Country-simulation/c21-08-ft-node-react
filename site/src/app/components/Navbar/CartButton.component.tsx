"use client"
import { useContext, useRef, useEffect, useState } from "react"
import { CartContext } from "@/app/contexts/cart.context"
import Icon from "../Icon/Icon.component"
import { CartButtonProps } from "./types/CartButtonProps.type"
import { getTotalProductsInCart } from "./utils/getTotalProductsInCart.util"
import { usePathname } from "next/navigation"
import "./styles/Navbar.style.css"

const CartButton = ({ changeCartVisibility }: CartButtonProps) => {
  const { productsInCart } = useContext(CartContext)
  const path = usePathname()
  const totalProductsInCart = getTotalProductsInCart(productsInCart)
  const notificationBarRef = useRef<HTMLSpanElement>(null)
  const [animationState, setAnimationState] = useState("")

  useEffect(() => {
    // Iniciar la animación de llenado
    setAnimationState("filling")

    const timer1 = setTimeout(() => {
      // Cambiar a la posición llena
      setAnimationState("full")
    }, 200) // Tiempo para que se llene

    const timer2 = setTimeout(() => {
      // Vaciar el span y moverlo a la derecha
      setAnimationState("empty")
    }, 400) // Tiempo para que se mantenga lleno

    const timer3 = setTimeout(() => {
      // Volver a la posición inicial
      setAnimationState("reset")
    }, 600) // Tiempo para que se vacíe

    // Limpiar los temporizadores al desmontar el componente o cambiar el estado
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [totalProductsInCart])
  return (
    <div className="overflow:hiden relative flex items-center rounded-md p-1">
      <span
        ref={notificationBarRef}
        className={`absolute left-0 h-full rounded-sm bg-krOrange transition-all duration-500 ${
          animationState === "filling"
            ? "w-full"
            : animationState === "full"
              ? "w-full"
              : animationState === "empty"
                ? "right-0 w-0"
                : "left-0 w-0"
        }`}
      ></span>
      <button
        className="z-10 flex justify-end gap-2"
        disabled={path === "/finalizar-compra"}
        onClick={changeCartVisibility}
      >
        <Icon iconType="cartSmall" />
        <span className="z-10">{totalProductsInCart}</span>
      </button>
    </div>
  )
}

export default CartButton
// if (notificationBarRef.current) {
//   notificationBarRef.current.classList.remove("animation-notification")
//   void notificationBarRef.current.offsetWidth
//   notificationBarRef.current.classList.add("animation-notification")
// }
