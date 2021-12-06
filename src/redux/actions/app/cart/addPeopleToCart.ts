import { cart } from "../../../types"


interface IPayload {
    [key: string]: any
}

export const addPeopleToCart = (payload: IPayload) => ({
    type: cart.ADD_PEOPLE_ITEM_TO_CART,
    payload
})
