import { cart } from "../../../types"

export const plusOnePeopleToCart = (payload: any) => ({
    type: cart.PLUS_ONE_PEOPLE_TO_CART,
    payload
})
