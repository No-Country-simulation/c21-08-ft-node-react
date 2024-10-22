import { DeliveryProps } from "../types/DeliveryProps.types"

const Delivery = ({
  isDeliverySelected,
  setIsDeliverySelected,
  setForm,
}: DeliveryProps) => {
  const handleSelect = (value: boolean) => {
    setIsDeliverySelected(value)
  }
  return (
    <div className="flex flex-col justify-center gap-1">
      <h3>¿Lo retira o se lo llevamos?</h3>
      <label
        htmlFor="PickItUp"
        className="my-auto flex w-fit cursor-pointer items-center justify-center"
      >
        <input
          type="radio"
          name="PickItUp"
          value="PickItUp"
          checked={isDeliverySelected === false}
          className="me-1"
          id="PickItUp"
          onChange={() => {
            setForm((prev) => ({ ...prev, isDeliverySelected: false }))
            handleSelect(false)
          }}
        />
        Lo retiro
      </label>
      <label
        htmlFor="Delivery"
        className="my-auto flex w-fit cursor-pointer items-center justify-center"
      >
        <input
          type="radio"
          name="Deliveri"
          value="Deliveri"
          checked={isDeliverySelected === true}
          className="me-1"
          id="Delivery"
          onChange={() => {
            setForm((prev) => ({ ...prev, isDeliverySelected: true }))
            handleSelect(true)
          }}
        />
        Delivery
      </label>
    </div>
  )
}

export default Delivery
