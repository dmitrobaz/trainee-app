import { cart } from "../../../types"

export const minusOneStarShipFromCart = (payload: any) => ({
    type: cart.MINUS_ONE_STAR_SHIP_FROM_CART,
    payload
})
