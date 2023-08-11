import axios from "axios";

export const getAllProduct = async (page) => {
    const token = localStorage.getItem('token');
    try {
        const res = (await axios.get(`http://localhost:8080/api?page=${page}`,
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
export const findAllProductType = async (id,page) => {
    const token = localStorage.getItem('token');
    try {
        const res = (await axios.get(`http://localhost:8080/api/${id}/fruit?page=${page}`,
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