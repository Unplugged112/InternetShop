import api from "../api/api";
import React, { useEffect } from "react";

function PaymentSuccess() {
  useEffect(() => {
    // получаем данные об оплате из query-параметров URL
    const searchParams = new URLSearchParams(window.location.search);
    const paymentId = searchParams.get("paymentId");
    const status = searchParams.get("status");

    // отправляем данные на сервер
    fetch("/api/payments", {
      method: "POST",
      body: JSON.stringify({ paymentId, status }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      // отображаем сообщение об успешной оплате
      alert("Оплата прошла успешно!");
    });
  }, []);

  return <div>Оплата в обработке...</div>;
}

export default PaymentSuccess;
