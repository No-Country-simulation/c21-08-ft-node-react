import { useSendOrderTypes } from "../types/useSendOrder.types"

export const sendOrder = async ({
  userId,
  delivery,
  methodOfPayment,
  cart,
}: useSendOrderTypes) => {
  console.log(cart)
  try {
    const res = await fetch("http://localhost:3170/order/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, delivery, methodOfPayment }),
    })
    console.log(res)
    const resOrder = await res.json()
    return resOrder
  } catch (error) {
    console.log(error)
  }
}
