import { PaymentMethodType } from "../types/PaymentMethod.types"

const PaymentMethod = ({
  isPaymentSelected,
  setIsPaymentSelected,
}: PaymentMethodType) => {
  return (
    <div id="Metodos-de-pago">
      <h2 className="text-2xl">¿Que metodo de pago prefieres?</h2>
      <label htmlFor="mercado-pago" className="block text-base">
        <input
          type="radio"
          id="mercado-pago"
          checked={isPaymentSelected === "mercado-pago"}
          onChange={() => {
            setIsPaymentSelected("mercado-pago")
          }}
          className="me-1"
        />
        Mercado Pago
      </label>
      <label htmlFor="whatsapp" className="block text-base">
        <input
          type="radio"
          id="whatsapp"
          checked={isPaymentSelected === "whatsapp"}
          onChange={() => {
            setIsPaymentSelected("whatsapp")
          }}
          className="me-1"
        />
        Whatsapp
      </label>
    </div>
  )
}

export default PaymentMethod
