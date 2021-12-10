import { cart } from "../../../types"


interface IPayload {
    [key: string]: any
}

export const addDataToCartFromLocalStorage = (payload: IPayload) => ({
    type: cart.ADD_DATA_TO_CART_FROM_LOCAL_STORAGE,
    payload
})
