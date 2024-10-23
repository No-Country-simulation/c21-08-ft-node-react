import { Product } from "@/app/types/Product.type"
import { SetStateAction, Dispatch } from "react"

export type Filters = "marca" | "ofertas" | "precio"

export type FiltersVisibility = {
  [key in Filters]: boolean
}

export type ProductsPanelProps = {
  products: Product[]
  categoryName: string
}

export type FilterFields = {
  brand: string[]
  discount: boolean
  price: number
}

export type FilterPanelProps = {
  setFormValues: Dispatch<SetStateAction<FilterFields>>
  formValues: FilterFields
  setCurrentProducts: Dispatch<SetStateAction<Product[]>>
  categoryName: string
  source: Product[]
  isFiltersVisible: boolean
}
