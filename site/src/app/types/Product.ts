type Promotion = {
    promotionID: string,
    discount: number
}

export type Product = {
    productID: string,
    name: string,
    description: string,
    price: number,
    imgUrl: string,
    categoryID: string,
    stock: number,
    promotion?: Promotion 
}
