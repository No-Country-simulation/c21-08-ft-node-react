import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { OrderStatus } from "../common/orderStatus.enum";
import { OrderProduct } from "./OrderProduct.entity";
import { User } from "./User.entity";

@Entity()
export class ClientOrder {
  @PrimaryColumn("uuid")
  clientOrderId!: string;

  @Column({ type: "enum", enum: OrderStatus, default: OrderStatus.PROCESS })
  status!: OrderStatus;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;

  @ManyToOne(() => User, (user) => user.order)
  user!: User;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.clientOrder)
  orderProduct!: OrderProduct[];
}
