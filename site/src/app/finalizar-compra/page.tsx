"use client"
import Cart from "../components/Cart/Cart.component"
import FormCheckout from "./components/FromCheckout.component"
import { CheckoutProvider } from "../contexts/checkout.context"

const Checkout = () => {
  return (
    <div className="mt-32 w-full">
      <div className="px-auto mx-auto flex max-w-[1000px] justify-center gap-1 md:flex-col">
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
