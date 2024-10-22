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
    <div
      className={`${checked ? "border-krOrange bg-[#e8d9d2]" : ""} my-4 flex w-fit min-w-56 items-start gap-2 rounded-md border-[1px] border-solid border-gray300 p-4`}
    >
      <input
        id={address.address}
        type="radio"
        name="address"
        value={address?.address}
        checked={checked}
        onChange={() => handleSelect()}
        className="mt-1"
      />
      <span>
        <label htmlFor={address.address} className="font-semibold">
          {address.address}
        </label>
        <p className="">{address.city}</p>
      </span>
    </div>
  )
}

export default CardAddress
