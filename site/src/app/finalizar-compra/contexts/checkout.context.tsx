import { createContext, useContext, useState } from "react"
import { TipoEntrega } from "../types/checkoutForm.type"
import { PaymentMethod } from "../types/checkoutForm.type"
import { Address } from "../types/checkoutForm.type"
import { sendOrder } from "../utils/sendOrder"
import { CartContext } from "@/app/contexts/cart.context"

export type CheckoutContextProviderProps = {
  children: React.ReactNode
}

export type CheckoutContextValue = {
  tipoEntrega: TipoEntrega
  selectedAddress: Address | null
  paymentMethod: PaymentMethod
  isSendOrderBtnDisabled: boolean
  handleTipoEntregaChange: (tipoEntrega: TipoEntrega) => void
  handleSelectedAddressChange: (selectedAddress: Address | null) => void
  handlePaymentMethodChange: (paymentMethod: PaymentMethod) => void
  handleSubmit: () => Promise<void>
}

export const CheckoutContext = createContext<CheckoutContextValue>(
  {} as CheckoutContextValue,
)

export const CheckoutContextProvider = ({
  children,
}: CheckoutContextProviderProps) => {
  const [tipoEntrega, setTipoEntrega] = useState<TipoEntrega>("retiro")
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null)
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("electronic")
  useState<PaymentMethod>("electronic")

  const { productsInCart } = useContext(CartContext)

  const handleTipoEntregaChange = (tipoEntrega: TipoEntrega) => {
    setTipoEntrega(tipoEntrega)
    if (tipoEntrega === "retiro") setSelectedAddress(null)
  }

  const handleSelectedAddressChange = (selectedAddress: Address | null) => {
    setSelectedAddress(selectedAddress)
  }

  const handlePaymentMethodChange = (paymentMethod: PaymentMethod) => {
    setPaymentMethod(paymentMethod)
  }

  const handleSubmit = async () => {
    const productsForOrder = productsInCart.map((productInCart) => ({
      productId: productInCart.productId,
      productQty: productInCart.productQty,
    }))

    const order = await sendOrder({
      userId: "3f71ed82-28ec-4a86-818b-4636bb53d42f",
      delivery: tipoEntrega === "delivery",
      methodOfPayment: paymentMethod,
      products: productsForOrder,
    })

    console.log(order)
  }

  // Como las demas opciones estan activadas por default
  // la unica chance de que este desactivado es cuando
  // se selecciona delivery, pero no una direccion.
  // PD: Esto incluso se podria salvar si se selecciona
  // una direccion por default, por ejemplo la primera.
  const isSendOrderBtnDisabled =
    tipoEntrega === "delivery" && selectedAddress === null

  return (
    <CheckoutContext.Provider
      value={{
        tipoEntrega,
        selectedAddress,
        paymentMethod,
        isSendOrderBtnDisabled,
        handleTipoEntregaChange,
        handleSelectedAddressChange,
        handlePaymentMethodChange,
        handleSubmit,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
