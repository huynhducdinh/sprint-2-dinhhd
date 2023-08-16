import axios from "axios";

export const saveOrderAndOrderDetail =async (shopping) => {
    const token = localStorage.getItem('token');

  try {
      await axios.post(`http://localhost:8080/api/order/orderDetail`,shopping,
          {
              headers: {
                  Authorization: `Bearer ${token}`,
              }
          })
  }catch (e){

  }
}