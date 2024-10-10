import { Product } from "@/app/types/Product";

export const products: Product[] = [
    {
        productID: 'P001',
        name: 'Galletas de Chocolate',
        description: 'Galletas crocantes con trozos de chocolate.',
        price: 1999,
        imgUrl: '/images/product-placeholder.webp',
        categoryID: 'C001',
        stock: 50
    },
    {
        productID: 'P002',
        name: 'Papas Fritas',
        description: 'Papas fritas crujientes con sal.',
        price: 2199,
        imgUrl: '/images/product-placeholder.webp',
        categoryID: 'C002',
        stock: 30
    },
    {
        productID: 'P003',
        name: 'Gomitas de Frutas',
        description: 'Gomitas dulces con sabor a frutas.',
        price: 699,
        imgUrl: '/images/product-placeholder.webp',
        categoryID: 'C003',
        stock: 100
    }
];
