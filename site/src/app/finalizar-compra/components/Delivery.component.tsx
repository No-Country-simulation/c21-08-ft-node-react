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
      <h3 className="my-2 mb-2 xs:text-[18px] xs:leading-[18px]">
        ¿Lo retira o se lo llevamos?
      </h3>
      <div className="sm:flex sm:gap-4">
        <label
          htmlFor="PickItUp"
          className="my-1 flex w-fit cursor-pointer items-center justify-center"
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
          className="my-1 flex w-fit cursor-pointer items-center justify-center"
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
    </div>
  )
}

export default Delivery
