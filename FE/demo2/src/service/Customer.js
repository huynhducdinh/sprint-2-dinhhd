import axios from "axios";

export const getAllCustomer =async () => {
  const token=localStorage.getItem("token")
    try {
        const res = (await axios.get('http://localhost:8080/api/customer',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })).data
        return res
    }catch (e) {
    }
}