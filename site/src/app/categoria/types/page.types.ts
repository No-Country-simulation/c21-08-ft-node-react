import { Product } from "@/app/types/Product.type"
import { SetStateAction, Dispatch } from "react"

export type Filters = "marca" | "ofertas" | "precio"

export type FilterSwitchers = {
  [key in Filters]: boolean
}

export type ProductsPanelProps = {
  products: Product[]
}

export type Fields = {
  brand: string[]
  discount: boolean
  price: number
}

export type FilterPanelProps = {
  setFormValues: Dispatch<SetStateAction<Fields>>
  setCurrentProducts: Dispatch<SetStateAction<Product[]>>
}
