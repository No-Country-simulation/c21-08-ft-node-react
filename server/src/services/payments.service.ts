import { MercadoPagoConfig, Preference } from "mercadopago";
import { AddToCartDto } from "../dto/AddToCart.dto";
import { PaymentsException } from "../exceptions/paymentsException";
import { ProductService } from "./product.service";
import { ProductException } from "../exceptions/ProductException";

export class PaymentsService {
  private readonly client: MercadoPagoConfig;
  private readonly productService: ProductService;
  constructor() {
    this.client = new MercadoPagoConfig({
      accessToken: process.env.ACCESS_TOKEN_MP || "",
    });
    this.productService = new ProductService();
  }

  async createPreference(products: AddToCartDto[]) {
    try {
      const preference = new Preference(this.client);

      const itemsPromises = products.map(async (product) => {
        const foundProduct = await this.productService.getProductById(
          product.productId
        );

        return {
          id: foundProduct.productId,
          title: foundProduct.name,
          unit_price: foundProduct.price,
          quantity: product.productQty,
          currency_id: "ARS",
          description: foundProduct.description,
        };
      });

      const items = await Promise.all(itemsPromises);

      return await preference.create({
        body: {
          items,
          back_urls: {
            success: "http://localhost:3170/success",
            failure: "http://localhost:3170/failure",
            pending: "http://localhost:3170/pending",
          },
          notification_url: `${process.env.LOCAL_HOST_TUNNEL}/webhook`,
        },
      });
    } catch (error) {
      if (error instanceof ProductException) {
        throw error;
      }
      throw new PaymentsException(
        "Error creating Mercado Pago preference",
        500
      );
    }
  }
}
