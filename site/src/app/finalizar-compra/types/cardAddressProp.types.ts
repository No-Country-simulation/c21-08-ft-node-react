import { Dispatch, SetStateAction } from "react"
type Address = {
  address: string
  number: number
  cp: number
  floor?: number
  dpto?: number
}
export type CardAddressProp = {
  address: Address
  setAddress: Dispatch<SetStateAction<Address | null>>
  checked: boolean
  setSelectedAddress: Dispatch<SetStateAction<number>>
  index: number
}
