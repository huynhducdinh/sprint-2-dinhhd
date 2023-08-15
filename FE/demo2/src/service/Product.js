import axios from "axios";

export const getAllProduct = async (page,name,price) => {
    const token = localStorage.getItem('token');
    try {
        const res = (await axios.get(`http://localhost:8080/api?page=${page}&name=${name}&price=${price}`,
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
export const findAllProductType = async (id,page,name,price) => {
    const token = localStorage.getItem('token');
    try {
        const res = (await axios.get(`http://localhost:8080/api/${id}/fruit?page=${page}&name=${name}&price=${price}`,
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
export const listAll = async () => {
    const token = localStorage.getItem('token');
    const res = (await axios.get('http://localhost:8080/api/list/top4',
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })).data
    return res
}
export const detail = async (id) => {
    const token = localStorage.getItem('token');

    try {
        const res = (await axios.get(`http://localhost:8080/api/detail/${id}/product`,
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
export const getAllTypeProduct = async (id) => {
    const token = localStorage.getItem('token');
    try {
        const res = (await axios.get(`http://localhost:8080/api/list/${id}/type`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })).data
        return res
    }catch (e) {
        console.log(e)
    }
}
export const homePageAdmin =async () => {
  try {
      const res=(await axios.get(`http://localhost:8080/api/pageFruitAdmin`)).data
      return res
  }catch (e) {
      console.log(e)
  }
}