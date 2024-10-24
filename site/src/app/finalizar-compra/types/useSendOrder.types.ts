import { CartFromBackend } from "@/app/components/Cart/types/ProductInCart.type"
export type useSendOrderTypes = {
  userId: string
  delivery: boolean
  methodOfPayment: string
  cart: CartFromBackend[]
}
