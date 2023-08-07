import axios from "axios";

export const productType =async () => {
  const token = localStorage.getItem('token');

  const res= (await axios.get(`http://localhost:8080/api/type`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })).data
    return res
}
export const sizeProduct =async () => {
  const token = localStorage.getItem('token');

  const res= (await axios.get(`http://localhost:8080/api/size`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })).data
  return res
}