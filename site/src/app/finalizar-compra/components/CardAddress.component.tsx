import { CardAddressProp } from "../types/cardAddressProp.types"
const CardAddress = ({
  address,
  setAddress,
  checked,
  setSelectedAddress,
  index,
}: CardAddressProp) => {
  const handleSelect = () => {
    setSelectedAddress(index)
    setAddress(address)
  }
  return (
    <div className="border-2 border-solid">
      <label htmlFor={address.address}>
        <input
          id={address.address}
          type="radio"
          name="address"
          value={address?.address}
          checked={checked}
          onChange={() => handleSelect()}
        />
        Direccion registrada
      </label>
      <p>{address.address}</p>
    </div>
  )
}

export default CardAddress
