import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { OrderStatus } from "../common/orderStatus.enum";
import { OrderProduct } from "./OrderProduct.entity";
import { User } from "./User.entity";
import { Payment } from "./Payment.entity";

@Entity()
export class ClientOrder {
  @PrimaryColumn("uuid")
  clientOrderId!: string;

  @Column({ type: "enum", enum: OrderStatus, default: OrderStatus.PROCESS })
  status!: OrderStatus;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;

  @ManyToOne(() => User, (user) => user.order)
  @JoinColumn({ name: "user" })
  user!: User;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.clientOrder)
  orderProduct!: OrderProduct[];

  @OneToMany(() => Payment, (payment) => payment.clientOrder)
  payment!: Payment[];
}
