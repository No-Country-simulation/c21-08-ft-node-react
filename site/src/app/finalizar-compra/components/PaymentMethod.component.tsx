import { PaymentMethodType } from "../types/PaymentMethod.types"

const PaymentMethod = ({
  isPaymentSelected,
  setIsPaymentSelected,
}: PaymentMethodType) => {
  return (
    <div id="Metodos-de-pago ">
      <h2 className="mt-4 text-2xl">¿Que metodo de pago prefieres?</h2>
      <label htmlFor="mercado-pago" className="my-2 block text-base">
        <input
          type="radio"
          id="mercado-pago"
          checked={isPaymentSelected === "electronic"}
          onChange={() => {
            setIsPaymentSelected("electronic")
          }}
          className="me-1"
        />
        Mercado Pago
      </label>
      <label htmlFor="whatsapp" className="my-2 block text-base">
        <input
          type="radio"
          id="whatsapp"
          checked={isPaymentSelected === "cash"}
          onChange={() => {
            setIsPaymentSelected("cash")
          }}
          className="me-1"
        />
        Whatsapp
      </label>
    </div>
  )
}

export default PaymentMethod
