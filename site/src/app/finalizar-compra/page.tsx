"use client"
import Cart from "../components/Cart/Cart.component"
import FormCheckout from "./components/FromCheckout.component"
import { CheckoutProvider } from "../contexts/checkout.context"
import { useAuth } from "../contexts/auth.context"
import { useRouter } from "next/navigation"
import { useContext, useEffect } from "react"
import { CartContext } from "../contexts/cart.context"

const Checkout = () => {
  const { user } = useAuth()
  const router = useRouter()
  const { productsInCart } = useContext(CartContext)

  useEffect(() => {
    if (!user && productsInCart.length != 0) {
      router.push("/auth")
    }
    if (user && productsInCart.length === 0) {
      router.push("/")
    }
  }, [user, productsInCart, router])

  return (
    <div className="mt-32 w-full">
      <div className="px-auto mx-auto flex min-h-[500px] max-w-[1000px] justify-center gap-1 md:flex-col">
        <CheckoutProvider>
          <FormCheckout></FormCheckout>
          <Cart
            isCartVisible={true}
            changeCartVisibility={() => {}}
            display={"checkout"}
          ></Cart>
        </CheckoutProvider>
      </div>
    </div>
  )
}

export default Checkout
