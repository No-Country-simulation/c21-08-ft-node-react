import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Product } from "./Product.entity";

@Entity()
export class Promotion {
  @PrimaryColumn("uuid")
  promotionId!: string;

  @Column()
  percentage!: number;

  @OneToMany(() => Product, (product) => product.promotion)
  product!: Product[];
}
