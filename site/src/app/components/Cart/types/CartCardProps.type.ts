import { Product } from "@/app/types/Product"

export type CartCardProps = Pick<Product, 'name' | 'price' | 'imgUrl'> 
