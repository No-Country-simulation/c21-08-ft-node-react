import { Product } from "../../../types/Product.type"

type width = "fixed" | "fluid"

export type CardProps = { product: Product } & { styleSlider?: string } & {
  width?: width
}
