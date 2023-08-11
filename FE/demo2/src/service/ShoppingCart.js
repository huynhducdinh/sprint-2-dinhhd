import axios from "axios";

export const addShoppingCart =async (quantity,idFruit) => {
    const token = localStorage.getItem('token');
    try {
        await axios.post(`http://localhost:8080/api/shoppingCart/add?quantity=${quantity}&idFruit=${idFruit}`,"",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
    }catch (e) {
        console.log(e)
    }
}
export  const listShoppingCart =async () => {
  try {
      const res =(await axios.get('http://localhost:8080/api/shoppingCart')).data
      return res
  }catch (e) {
      console.log(e)
  }
}
export const findAllCustomerId =async (id)=>{
    const token = localStorage.getItem('token');

    try {
        const res = (await axios.get(`http://localhost:8080/api/customer/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })).data
        return res
    } catch (e) {
        console.log(e)
    }
}