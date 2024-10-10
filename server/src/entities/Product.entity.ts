import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { Measurement } from "../common/measurement.enum";
import { User } from "./User.entity";
import { Category } from "./Category.entity";
import { CartProduct } from "./CartProduct.entity";
import { OrderProduct } from "./OrderProduct.entity";

@Entity()
export class Product {
  @PrimaryColumn("uuid")
  productId!: string;

  @Column()
  name!: string;

  @Column()
  price!: number;

  @Column({ type: "enum", enum: Measurement, default: Measurement.UNITARY })
  unitOfMeasurement!: string;

  @Column()
  description!: string;

  @Column()
  stock!: number;

  @ManyToMany(() => User, (user) => user.product)
  @JoinTable({
    name: "favorite",
    joinColumn: {
      name: "product",
      referencedColumnName: "productId",
    },
    inverseJoinColumn: {
      name: "user",
      referencedColumnName: "userId",
    },
  })
  user!: User[];

  @ManyToOne(() => Category, (category) => category.product)
  category!: Category;

  @OneToMany(() => CartProduct, (CartProduct) => CartProduct.product)
  cartProduct!: CartProduct[];

  @OneToMany(() => OrderProduct, orderProduct => orderProduct.product)
  orderProduct!: OrderProduct[];
}
