import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "./User.entity";

@Entity()
export class Facturation {
  @PrimaryColumn("uuid")
  facturationId!: string;

  @Column()
  address!: string;

  @Column()
  phone!: string;

  @OneToOne(() => User, (user) => user.facturation)
  @JoinColumn({ name: "user" })
  user!: User;
}