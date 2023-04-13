import api from "../api/api";

const createPayment = async (amount, orderId, items) => {
  try {
    const response = await api.post("/create_payment/", {
      totalPrice: amount,
      order_id: orderId,
      items: items,
    });
    return response.data.url;
  } catch (error) {
    console.log(error);
    throw new Error("Не удалось создать платеж");
  }
};

export default createPayment;
