import axios from "axios";

export const addShoppingCart = async (quantity, idFruit) => {
    const token = localStorage.getItem('token');
    try {
        await axios.post(`http://localhost:8080/api/shoppingCart/add?quantity=${quantity}&idFruit=${idFruit}`, "",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
    } catch (e) {
        console.log(e)
    }
}
export const listShoppingCart = async () => {
    try {
        const res = (await axios.get('http://localhost:8080/api/shoppingCart')).data
        return res
    } catch (e) {
        console.log(e)
    }
}
export const deleteShopping = async (id) => {
    const token = localStorage.getItem('token');
    try {
        const res = await axios.delete(`http://localhost:8080/api/shoppingCart/delete/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
        return res;
    } catch (e) {
        console.log(e)
    }
}
export const setQuantityShopping = async (setQuantity,id) => {
    try{
        const res=(await axios.patch(`http://localhost:8080/api/shoppingCart/${setQuantity}/${id}`)).data

    }catch (e){
        console.log(e)
    }
}