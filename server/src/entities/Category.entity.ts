import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Product } from "./Product.entity";

@Entity()
export class Category {
  @PrimaryColumn("uuid")
  categoryId!: string;

  @Column()
  categoryName!: string;

  @Column({ type: "boolean", default: false })
  featured!: boolean;

  @OneToMany(() => Product, (product) => product.category)
  product!: Product[];
}
