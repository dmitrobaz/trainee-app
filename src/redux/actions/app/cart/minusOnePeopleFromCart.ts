import { cart } from "../../../types"

export const minusOnePeopleFromCart = (payload: any) => ({
    type: cart.MINUS_ONE_PEOPLE_FROM_CART,
    payload
})
