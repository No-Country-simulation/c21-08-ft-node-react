import { MethodOfPayment } from "../common/methodOfPayment.enum";
import { CreateOrderDto } from "../dto/CreateOrder.dto";
import { ClientOrder } from "../entities/ClientOrder.entity";
import { User } from "../entities/User.entity";
import { ClientOrderException } from "../exceptions/ClientOrderException";
import { UserException } from "../exceptions/UserException";
import { clientOrderRepository } from "../repositories/clientOrder.repository";
import { MailService } from "./mail.service";
import { UserService } from "./user.service";
import { validate } from "class-validator";

export class ClientOrderService {
  private readonly userService: UserService;
  private readonly mailService: MailService;

  constructor() {
    this.userService = new UserService();
    this.mailService = new MailService();
  }

  async createOrder(
    userId: string,
    delivery: boolean,
    methodOfPayment: MethodOfPayment
  ) {
    //Validaciones de dto
    const createOrderDto = new CreateOrderDto();

    createOrderDto.userId = userId;
    createOrderDto.delivery = delivery;
    createOrderDto.methodOfPayment = methodOfPayment;

    const errors = await validate(createOrderDto, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });
    if (errors.length > 0) {
      throw new ClientOrderException("Dto validation failed", 400);
    }

    try {
      const user: User | null | undefined = await this.userService.getUserById(
        userId
      );

      const clientOrderId = crypto.randomUUID();

      const order: ClientOrder = clientOrderRepository.create({
        clientOrderId,
        user,
        delivery,
        methodOfPayment,
      });

      await clientOrderRepository.save(order);
      await this.mailService.sendConfirmationEmail(user.email, clientOrderId);

      return order;
    } catch (error) {
      if (
        error instanceof ClientOrderException ||
        error instanceof UserException
      ) {
        throw error;
      }
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

  async getOrderById(clientOrderId: string): Promise<ClientOrder | null> {
    try {
      const order: ClientOrder | null = await clientOrderRepository.findOne({
        where: { clientOrderId },
      });

      if (!order) {
        throw new ClientOrderException("Order not found", 404);
      }

      return order;
    } catch (error) {
      if (error instanceof ClientOrderException) {
        throw error;
      }
      throw new ClientOrderException("Error getting orders by user id", 500);
    }
  }

  async getOrdersByUserId(userId: string): Promise<ClientOrder[]> {
    try {
      const user = await this.userService.getUserById(userId);

      const orders: ClientOrder[] = await clientOrderRepository.find({
        where: { user },
      });

      return orders;
    } catch (error) {
      if (error instanceof UserException) {
        throw error;
      }
      throw new ClientOrderException("Error getting orders by user id", 500);
    }
  }
}
