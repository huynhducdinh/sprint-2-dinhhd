import axios from "axios";

export const getAllProduct = async () => {
    try {
        const res = (await axios.get(`http://localhost:8080/api`)).data
        return res
    } catch (e) {
        console.log(e)
    }
}