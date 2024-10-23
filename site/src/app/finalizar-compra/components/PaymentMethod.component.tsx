import { PaymentMethodType } from "../types/PaymentMethod.types"

const PaymentMethod = ({
  isPaymentSelected,
  setIsPaymentSelected,
}: PaymentMethodType) => {
  return (
    <div id="Metodos-de-pago ">
      <h2 className="my-2 mt-4 text-2xl xs:text-[18px] xs:leading-[18px]">
        ¿Que metodo de pago prefieres?
      </h2>
      <div className="sm:flex sm:gap-4">
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
    </div>
  )
}

export default PaymentMethod
