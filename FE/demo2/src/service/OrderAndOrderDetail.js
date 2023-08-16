import axios from "axios";

export const saveOrderAndOrderDetail =async (orders,orderDetail) => {
    const token = localStorage.getItem('token');

  try {
      await axios.post(`http://localhost:8080/api/order/orderDetail`,orders,orderDetail,
          {
              headers: {
                  Authorization: `Bearer ${token}`,
              }
          })
  }catch (e){

  }
}