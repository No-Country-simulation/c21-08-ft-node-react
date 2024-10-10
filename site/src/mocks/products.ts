import { Product } from "@/app/types/Product";

export const products: Product[] = [
    {
        productID: 'P001',
        name: 'Wireless Headphones',
        description: 'High-quality noise-cancelling wireless headphones.',
        price: 99.99,
        imgUrl: '/images/product-placeholder.webp',
        categoryID: 'C001',
        stock: 50
    },
    {
        productID: 'P002',
        name: 'Smartwatch',
        description: 'Stylish smartwatch with fitness tracking and notifications.',
        price: 149.99,
        imgUrl: '/images/product-placeholder.webp',
        categoryID: 'C002',
        stock: 30
    },
    {
        productID: 'P003',
        name: 'Gaming Mouse',
        description: 'Ergonomic gaming mouse with customizable buttons and RGB lighting.',
        price: 59.99,
        imgUrl: '/images/product-placeholder.webp',
        categoryID: 'C003',
        stock: 100
    }
];