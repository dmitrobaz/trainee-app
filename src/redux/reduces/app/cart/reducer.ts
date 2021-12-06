import { initState } from ".";
import { cart as cartTypes } from "../../../types";

export const cart = (state: any = initState, action: any) => {
    switch (action.type) {
        case cartTypes.ADD_PEOPLE_ITEM_TO_CART: {
            const currentPeopleItems = !state.people[action.payload.name]
                ? [action.payload]
                : [...state.people[action.payload.name], action.payload]
            const newPeopleItems = {
                ...state.people,
                [action.payload.name]: currentPeopleItems
            }
            return {
                ...state,
                people: newPeopleItems,
            }
        }
        case cartTypes.ADD_STAR_SHIP_ITEM_TO_CART: {
            const currentStarShipItems = !state.starships[action.payload.name]
                ? [action.payload]
                : [...state.starships[action.payload.name], action.payload]
            const newStarShipItems = {
                ...state.starships,
                [action.payload.name]: currentStarShipItems
            }
            return {
                ...state,
                starships: newStarShipItems,
            }
        }
        case cartTypes.CLEAR_ONE_PEOPLE_ITEM_CART: {
            const newItems = {
                ...state.people
            }
            delete newItems[action.payload]
            return {
                ...state,
                people: newItems,
            };

        }
        case cartTypes.CLEAR_ONE_STAR_SHIP_ITEM_CART: {
            const newItems = {
                ...state.starships
            }
            delete newItems[action.payload]
            return {
                ...state,
                starships: newItems,
            };

        }
        case cartTypes.PLUS_ONE_PEOPLE_TO_CART: {
            const newObjItems = [
                ...state.people[action.payload.data[0].name],
                state.people[action.payload.data[0].name][0]
            ]
            return {
                ...state,
                people: { ...state.people, [action.payload.data[0].name]: newObjItems }
            }
        }
        case cartTypes.MINUS_ONE_PEOPLE_FROM_CART: {
            const oldItems: Array<any> = state.people[action.payload.data[0].name]
            const newObjItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems;

            return {
                ...state,
                people: { ...state.people, [action.payload.data[0].name]: newObjItems }
            }
        }
        case cartTypes.PLUS_ONE_STAR_SHIP_TO_CART: {
            const newObjItems = [
                ...state.starships[action.payload.data[0].name],
                state.starships[action.payload.data[0].name][0]
            ]
            return {
                ...state,
                starships: { ...state.starships, [action.payload.data[0].name]: newObjItems }
            }
        }
        case cartTypes.MINUS_ONE_STAR_SHIP_FROM_CART: {
            const oldItems: Array<any> = state.starships[action.payload.data[0].name]
            const newObjItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems;

            return {
                ...state,
                starships: { ...state.starships, [action.payload.data[0].name]: newObjItems }
            }
        }

        case cartTypes.CLEAR_CART:
            return initState
        default: return state
    }
}

