import axios from "axios";

export const getAllProduct = async () => {
    const token = localStorage.getItem('token');
    try {
        const res = (await axios.get(`http://localhost:8080/api`,
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
        const res =
            (await axios.get(`http://localhost:8080/api/detail/${id}/product`,
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