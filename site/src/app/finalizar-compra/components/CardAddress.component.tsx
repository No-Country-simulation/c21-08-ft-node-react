import { CardAddressProp } from "../types/cardAddressProp.types"
const CardAddress = ({
  address,
  checked,
  setSelectedAddress,
  index,
}: CardAddressProp) => {
  const handleSelect = () => {
    setSelectedAddress(index)
  }
  return (
    <div className="my-2 w-fit min-w-56 rounded-md border-2 border-solid border-gray400">
      <label htmlFor={address.address}>
        <input
          id={address.address}
          type="radio"
          name="address"
          value={address?.address}
          checked={checked}
          onChange={() => handleSelect()}
          className="mx-1"
        />
        {address.address}
      </label>
      <p className="ms-5">{address.city}</p>
    </div>
  )
}

export default CardAddress
