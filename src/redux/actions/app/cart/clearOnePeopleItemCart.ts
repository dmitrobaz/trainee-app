import { cart } from "../../../types"

export const clearOnePeopleItemCart = (payload: string) => ({
    type: cart.CLEAR_ONE_PEOPLE_ITEM_CART,
    payload
})
