import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Product } from "./Product.entity";

@Entity()
export class Category {
  @PrimaryColumn("uuid")
  categoryId!: string;

  @Column()
  categoryName!: string;

  @OneToMany(() => Product, (product) => product.category)
  product!: Product[];
}
