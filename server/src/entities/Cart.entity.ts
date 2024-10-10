import { Entity, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "./User.entity";
import { CartProduct } from "./CartProduct.entity";

@Entity()
export class Cart {
  @PrimaryColumn("uuid")
  cartId!: string;

  @OneToOne(() => User, (user) => user.cart)
  user!: User;

  @OneToMany(() => CartProduct, (cartProduct) => cartProduct.cart)
  cartProduct!: CartProduct[];
}
