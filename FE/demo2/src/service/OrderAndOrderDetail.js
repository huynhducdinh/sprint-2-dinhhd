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
export const listHistory = async () => {
    const token = localStorage.getItem('token');
    try {
        const res = (await axios.get('http://localhost:8080/api/order/orderDetail/history',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })).data
        return res
    }catch (e) {
    }
}
export const historyDetail =async (id) => {
    const token = localStorage.getItem('token');
    try {
        const res = (await axios.get(`http://localhost:8080/api/order/orderDetail/history/detail/?id=${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })).data
        return res
    }catch (e) {
    }
}