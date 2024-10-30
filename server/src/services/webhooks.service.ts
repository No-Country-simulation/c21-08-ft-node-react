import { WebHookException } from "../exceptions/webHooksException";

export class WebHooksService {

  async handleWebHook(webHookData: any) {
    console.log("web hook")
    try {
      const paymentId = webHookData.data.id;
      const paymentDetails = await this.getPaymentDetails(paymentId);

      console.log(paymentDetails);
    } catch (error) {
      if (error instanceof WebHookException) {
        throw error;
      }
      throw new WebHookException("Error handling web hook", 500);
    }
  }

  private async getPaymentDetails(paymentId: string) {
    try {
      const accessToken = process.env.ACCESS_TOKEN_MP;

      const response = await fetch(
        `https://api.mercadopago.com/v1/payments/${paymentId}`,
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      return await response.json();
    } catch (error) {
      throw new WebHookException(
        "Error getting payment details of web hook sent by Mercado Pago",
        500
      );
    }
  }
}
