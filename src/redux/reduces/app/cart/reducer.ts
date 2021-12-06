import { initState } from ".";
import { cart as cartAddTypes } from "../../../types";

export const cart = (state = initState, action: any) => {
    switch (action.type) {
        case cartAddTypes.ADD_PEOPLE_ITEM_TO_CART:
            return { ...state, people: [...state.people, action.payload] }
        case cartAddTypes.ADD_STAR_SHIP_ITEM_TO_CART:
            return { ...state, starships: [...state.starships, action.payload] }
        case cartAddTypes.CLEAR_CART:
            return initState
        default: return state
    }
}

