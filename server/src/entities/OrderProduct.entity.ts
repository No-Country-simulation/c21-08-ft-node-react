import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ClientOrder } from "./ClientOrder.entity";
import { Product } from "./Product.entity";

@Entity("order_product")
export class OrderProduct {
  @PrimaryColumn("uuid")
  orderProductId!: string;

  @Column()
  quantity!: number;

  @ManyToOne(() => ClientOrder, (clientOrder) => clientOrder)
  clientOrder!: ClientOrder;

  @ManyToOne(() => Product, (product) => product.orderProduct)
  product!: Product;
}
