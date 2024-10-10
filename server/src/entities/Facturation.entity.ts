import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "./User.entity";

@Entity()
export class Facturation {
  @PrimaryColumn()
  facturationId!: number;

  @Column()
  address!: string;

  @Column()
  phone!: string;

  @OneToOne(() => User, (user) => user.facturation)
  user!: User;
}
