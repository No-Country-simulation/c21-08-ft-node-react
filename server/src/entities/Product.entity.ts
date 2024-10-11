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

  @Column({ nullable: true })
  imgUrl!: string;

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

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.product)
  orderProduct!: OrderProduct[];
}
