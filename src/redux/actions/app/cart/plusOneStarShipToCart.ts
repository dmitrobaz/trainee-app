import { cart } from "../../../types"

export const plusOneStarShipToCart = (payload: any) => ({
    type: cart.PLUS_ONE_STAR_SHIP_TO_CART,
    payload
})
