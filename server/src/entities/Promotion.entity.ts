import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Product } from "./Product.entity";

@Entity()
export class Promotion {
  @PrimaryColumn("uuid")
  promotionId!: string;

  @Column("decimal", { precision: 5, scale: 2 })
  percentage!: number;

  @OneToMany(() => Product, (product) => product.promotion)
  product!: Product[];
}
