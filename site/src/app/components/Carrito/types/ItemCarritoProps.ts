import { Product } from "@/app/types/Product"

export type ItemCarritoProps = Pick<Product, 'name' | 'price' | 'imgUrl'> 