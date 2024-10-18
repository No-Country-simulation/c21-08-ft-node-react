import { Product } from "@/app/types/Product.type"
import { SetStateAction, Dispatch } from "react"

export type Filters = "marca" | "ofertas" | "precio"

export type FilterSwitchers = {
  [key in Filters]: boolean
}

export type ProductsPanelProps = {
  products: Product[]
  currentCategory: string
}

export type Fields = {
  brand: string[]
  discount: boolean
  price: number
}

export type FilterPanelProps = {
  setFormValues: Dispatch<SetStateAction<Fields>>
  formValues: Fields
  setCurrentProducts: Dispatch<SetStateAction<Product[]>>
  currentCategory: string
  source: Product[]
}
