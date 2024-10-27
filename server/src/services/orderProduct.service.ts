import { AddToCartDto } from "../dto/AddToCart.dto";
import { ClientOrder } from "../entities/ClientOrder.entity";
import { ClientOrderException } from "../exceptions/ClientOrderException";
import { OrderProductException } from "../exceptions/OrderProductException";
import { ProductException } from "../exceptions/ProductException";
import { orderProductRepository } from "../repositories/orderProduct.repository";
import { ClientOrderService } from "./clientOrder.service";
import { ProductService } from "./product.service";

export class OrderProductService {
  private readonly clientOrderService: ClientOrderService;
  private readonly productService: ProductService;
  constructor() {
    this.clientOrderService = new ClientOrderService();
    this.productService = new ProductService();
  }

  //Metodo para asignar uno o mas productos a una orden existente.
  async addProductToOrder(
    orderId: string,
    products: AddToCartDto[]
  ): Promise<void> {
    try {
      //Traemos la orden recibida por parametro (orderId)
      const order: ClientOrder | null =
        await this.clientOrderService.getOrderById(orderId);

      //Verificamos que exista, de lo contrario enviamos un error.
      if (!order) {
        throw new OrderProductException("Order not found", 404);
      }

      //Descomentar esto en caso que se quiera verificar que confirmen la orden antes de seguir.
      // if (!order.isConfirmed) {
      //   throw new OrderProductException("Order not confirmed", 400);
      // }

      //Recorremos la lista de productos enviada por el cliente y agregamos en el array un objeto de tipo OrderProduct con cada iteracion
      const orderProductsPromises = products.map(async (item) => {
        const orderProductId = crypto.randomUUID();
        const product = await this.productService.getProductById(
          item.productId
        );
        return {
          orderProductId,
          quantity: item.productQty,
          clientOrder: order,
          product,
          item,
        };
      });

      const orderProducts = await Promise.all(orderProductsPromises);

      await orderProductRepository.save(orderProducts);
    } catch (error) {
      if (
        error instanceof ClientOrderException ||
        error instanceof ProductException
      ) {
        throw error;
      }

      throw new OrderProductException("Error adding product in cart", 500);
    }
  }
}
