export type ProductQtyInputProps = {
    productID: string
    productQty: number
    incrementProductQty: (id: string) => void
    decrementProductQty: (id: string) => void
}
