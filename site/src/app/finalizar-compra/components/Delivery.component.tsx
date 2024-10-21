import { DeliveryProps } from "../types/DeliveryProps.types"
import { useState } from "react"
const Delivery = ({ onSelect }: DeliveryProps) => {
  const [selectedOption, setSelectedOption] = useState<boolean | null>(null)

  const handleSelect = (value: boolean) => {
    setSelectedOption(value)
    onSelect(value)
  }
  return (
    <div id="Delivery">
      {/* preguntar a backend que valores requieren */}
      <h2>¿Lo retira o se lo llevamos?</h2>
      <label htmlFor="PickItUp" className="block">
        <input
          type="radio"
          name="PickItUp"
          value="PickItUp"
          checked={selectedOption === false}
          id="PickItUp"
          onClick={() => handleSelect(false)}
        />
        Lo retiro
      </label>
      <label htmlFor="Deliveri" className="block">
        <input
          type="radio"
          name="Deliveri"
          value="Deliveri"
          checked={selectedOption === true}
          id="Deliveri"
          onClick={() => handleSelect(true)}
        />
        Delivery
      </label>
    </div>
  )
}

export default Delivery
