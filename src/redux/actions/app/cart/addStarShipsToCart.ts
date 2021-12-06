import { cart } from "../../../types"

interface IPayload {
    [key: string]: any
}

export const addStarShipsToCart = (payload: IPayload) => ({
    type: cart.ADD_STAR_SHIP_ITEM_TO_CART,
    payload
})
