import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Product } from "./Product.entity";
import { Cart } from "./Cart.entity";

@Entity("cart_product")
export class CartProduct {
  @PrimaryColumn("uuid")
  cartProductId!: string;

  @Column()
  quantity!: number;

  @ManyToOne(() => Cart, (cart) => cart.cartProduct)
  cart!: Cart;

  @ManyToOne(() => Product, (product) => product.cartProduct)
  product!: Product;
}
