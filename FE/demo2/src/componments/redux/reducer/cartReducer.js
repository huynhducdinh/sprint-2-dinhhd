import {GET_ALL_CART} from "../actions/type";

const initialState =[]
export const cartReducer = (cart=initialState,action)=>{
const{type,payload} = action
    switch (type) {
        case GET_ALL_CART:
            return payload

        default :
            return cart
    }
}