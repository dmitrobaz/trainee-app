import { cart } from "../../../types"

export const clearOneStarShipItemCart = (payload: string) => ({
    type: cart.CLEAR_ONE_STAR_SHIP_ITEM_CART,
    payload
})
