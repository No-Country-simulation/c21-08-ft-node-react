import { Product } from "../../../types/Product.type"

export type CartCardProps = Pick<Product, 'name' | 'price' | 'imgUrl'> 
