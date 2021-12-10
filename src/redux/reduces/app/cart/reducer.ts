import { initState } from ".";
import { cart as cartTypes } from "../../../types";

const getTotalCount = (obj: any) => {
    const objKeys = Object.keys(obj).slice(0, -1)
    return objKeys && objKeys.reduce((acc: Number, curr: string) => acc + obj[curr].count, 1)
}

export const cart = (state: any = initState, action: any) => {
    switch (action.type) {
        case cartTypes.ADD_PEOPLE_ITEM_TO_CART: {

            const currentPeopleItems = !(state.people) || !state.people[action.payload.id]
                ? { data: action.payload.data, count: 1 }
                : { data: action.payload.data, count: state.people[action.payload.id].count + 1 }
            return {
                ...state,
                people: {
                    ...state.people,
                    [action.payload.id]: currentPeopleItems,
                    peopleTotalCount: getTotalCount(state.people)
                },
            }
        }
        case cartTypes.ADD_STAR_SHIP_ITEM_TO_CART: {
            const currentStarShipItems = !(state.starships) || !state.starships[action.payload.id]
                ? { data: action.payload.data, count: 1 }
                : { data: action.payload.data, count: state.starships[action.payload.id].count + 1 }
            const newStarShipItems = {
                ...state.starships,
                [action.payload.id]: currentStarShipItems
            }
            return {
                ...state,
                starships: {
                    ...state.starships,
                    [action.payload.id]: currentStarShipItems,
                    starShipTotalCount: getTotalCount(state.starships)
                }
            }
        }
        case cartTypes.ADD_DATA_TO_CART_FROM_LOCAL_STORAGE: {
            const dataFromLocalStorage = action.payload
            const isStoreEmpty = state.people.peopleTotalCount === 0 && state.starships.starShipTotalCount === 0

            return isStoreEmpty && dataFromLocalStorage
        }
        case cartTypes.CLEAR_ONE_PEOPLE_ITEM_CART: {
            const newItems = {
                ...state.people,
                peopleTotalCount: state.people.peopleTotalCount - state.people[action.payload].count

            }
            delete newItems[action.payload]
            return {
                ...state,
                people: Object.keys(newItems).length === 0
                    ? null
                    : newItems
            };

        }
        case cartTypes.CLEAR_ONE_STAR_SHIP_ITEM_CART: {
            const newItems = {
                ...state.starships,
                starShipTotalCount: state.starships.starShipTotalCount - state.starships[action.payload].count

            }
            delete newItems[action.payload]
            return {
                ...state,
                starships: Object.keys(newItems).length === 0
                    ? null
                    : newItems
            };

        }
        case cartTypes.PLUS_ONE_PEOPLE_TO_CART: {
            const newObjItems = { data: action.payload.data, count: state.people[action.payload.id].count + 1 }
            return {
                ...state,
                people: {
                    ...state.people,
                    [action.payload.id]: newObjItems,
                    peopleTotalCount: getTotalCount(state.people)
                }
            }
        }
        case cartTypes.MINUS_ONE_PEOPLE_FROM_CART: {
            const oldItems = state.people[action.payload.id]
            const newObjItems = oldItems.count > 1 ? { data: action.payload.data, count: state.people[action.payload.id].count - 1 } : oldItems;
            return {
                ...state,
                people: {
                    ...state.people,
                    [action.payload.id]: newObjItems,
                    peopleTotalCount: state.people.peopleTotalCount - 1
                },
            }
        }
        case cartTypes.PLUS_ONE_STAR_SHIP_TO_CART: {
            const newObjItems = { data: action.payload.data, count: state.starships[action.payload.id].count + 1 }
            return {
                ...state,
                starships: {
                    ...state.starships,
                    [action.payload.id]: newObjItems,
                    starShipTotalCount: getTotalCount(state.starships)
                },
            }
        }
        case cartTypes.MINUS_ONE_STAR_SHIP_FROM_CART: {
            const oldItems = state.starships[action.payload.id]
            const newObjItems = oldItems.count > 1 ? { data: action.payload.data, count: state.starships[action.payload.id].count - 1 } : oldItems;

            return {
                ...state,
                starships: {
                    ...state.starships,
                    [action.payload.id]: newObjItems,
                    starShipTotalCount: state.starships.starShipTotalCount - 1
                },
            }
        }
        case cartTypes.CLEAR_CART: return initState
        default: return state
    }
}

