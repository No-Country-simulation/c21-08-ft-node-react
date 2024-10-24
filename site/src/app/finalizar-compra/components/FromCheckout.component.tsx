import CardAddress from "./CardAddress.component"
import Delivery from "./Delivery.component"
import FormDelivery from "./FormDelivery.component"
import PaymentMethod from "./PaymentMethod.component"
import { addresses } from "../../../mocks/addresses.mock"
import { useContext, useState } from "react"
import { CheckoutContext } from "../../contexts/checkout.context"
import { CartContext } from "@/app/contexts/cart.context"
import { sendOrder } from "../utils/sendOrder"
const initialState = {
  isDeliverySelected: false,
  isPaymentSelected: "mercado-pago",
}
const FormCheckout = () => {
  const [selectedAddress, setSelectedAddress] = useState(0)
  const [form, setForm] = useState(initialState)
  console.log("logging for just because the linter: ", form)
  const {
    isDeliverySelected,
    setIsDeliverySelected,
    isPaymentSelected,
    setIsPaymentSelected,
  } = useContext(CheckoutContext)
  const { productsInCart } = useContext(CartContext)
  const cartFromBackend = productsInCart.map((p) => {
    return { productId: p.productId, productQty: p.productQty }
  })
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const order = await sendOrder({
      userId: "3f71ed82-28ec-4a86-818b-4636bb53d42f",
      delivery: isDeliverySelected,
      methodOfPayment: isPaymentSelected,
      cart: cartFromBackend,
    })
    console.log("orden:", order)
    //to do: redireccion a mercado pago, obtener el id del usuario,
  }
  return (
    <div className="md:px-auto mx-auto w-full max-w-[465px] flex-col p-1">
      <h1 className="h1 xs:text-[24px] xs:leading-[24px]">
        Confirma tus datos
      </h1>
      <form id="checkoutForm" onSubmit={handleSubmit} className="block w-full">
        {/* <h2 className="text-2xl my-2 xs:text-[18px] xs:leading-[18px]">Datos de entrega</h2> */}
        <Delivery
          setForm={setForm}
          isDeliverySelected={isDeliverySelected}
          setIsDeliverySelected={setIsDeliverySelected}
        ></Delivery>
        {isDeliverySelected ? (
          <div id="Datos-de-entrega">
            <h3 className="my-2 xs:text-[18px] xs:leading-[18px]">
              Direcciones
            </h3>
            {addresses
              ? addresses.map((address, index) => (
                  <CardAddress
                    key={index}
                    address={address}
                    checked={index === selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                    index={index}
                  ></CardAddress>
                ))
              : null}
            <button
              type="button"
              className="mb-2 h-10 min-w-56 rounded-lg bg-gray1000 px-1 text-xl text-white sm:w-full"
              onClick={() => {
                setSelectedAddress(-1)
              }}
            >
              Agregar una nueva direccion
            </button>
            {selectedAddress === -1 ? <FormDelivery></FormDelivery> : null}
          </div>
        ) : null}
        <PaymentMethod
          isPaymentSelected={isPaymentSelected}
          setIsPaymentSelected={setIsPaymentSelected}
        ></PaymentMethod>
      </form>
    </div>
  )
}

export default FormCheckout
