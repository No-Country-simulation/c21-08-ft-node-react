import { Column, Entity, PrimaryColumn } from "typeorm";
import { PaymentStatus } from "../common/paymentStatus.enum";

@Entity()
export class Payment {
  @PrimaryColumn("uuid")
  paymentId!: string;

  @Column()
  amount!: number;

  @Column({ type: "enum", enum: PaymentStatus, default: PaymentStatus.PROCESS })
  status!: PaymentStatus;
}
