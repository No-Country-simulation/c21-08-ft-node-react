import { User } from "../entities/User.entity";
import { ClientOrderException } from "../exceptions/ClientOrderException";
import { clientOrderRepository } from "../repositories/clientOrder.repository";
import { MailService } from "./mail.service";
import { UserService } from "./user.service";

export class ClientOrderService {
  private readonly userService: UserService;
  private readonly mailService: MailService;

  constructor() {
    this.userService = new UserService();
    this.mailService = new MailService();
  }

  async createOrder(userId: string) {
    try {
      const user: User | null | undefined = await this.userService.getUserById(
        userId
      );

      if (!user) {
        return null;
      }

      const clientOrderId = crypto.randomUUID();

      const order = clientOrderRepository.create({
        clientOrderId,
        user,
      });

      await clientOrderRepository.save(order);
      await this.mailService.sendConfirmationEmail(user.email, clientOrderId);

      return order;
    } catch (error) {
      throw new ClientOrderException("Error creating order", 500);
    }
  }

  async confirmOrder(clientOrderId: any) {
    try {
      const order = await clientOrderRepository.findOne({
        where: { clientOrderId },
      });

      if (!order) {
        throw new ClientOrderException("Order not found", 404);
      }

      order.isConfirmed = true;

      await clientOrderRepository.save(order);

      return order;
    } catch (error) {
      throw new ClientOrderException("Error trying to confirm order", 500);
    }
  }
}
