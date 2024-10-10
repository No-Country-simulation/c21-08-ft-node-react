import { Entity, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "./User.entity";

@Entity()
export class Cart {
  @PrimaryColumn()
  cartId!: number;

  @OneToOne(() => User, (user) => user.cart)
  user!: User;
}
