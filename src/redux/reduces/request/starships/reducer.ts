import { starships as starShipsGetTypes } from "../../../types/";
import { initState } from ".";

export const starships = (state = initState, action: any) => {
    switch (action.type) {
        case starShipsGetTypes.GET_ALL_STAR_SHIPS_SUCСESS:
            return { ...state, data: action.payload, status: 'success' }
        case starShipsGetTypes.GET_ALL_STAR_SHIPS_FAILED:
            return { ...state, error: action.payload, status: 'error' }
        case starShipsGetTypes.GET_ALL_STAR_SHIPS_PENDING:
            return { ...state, error: null, status: 'pending' }

        case starShipsGetTypes.GET_ONE_STAR_SHIP_SUCСESS:
            return { ...state, data: { results: [action.payload] }, status: 'success' }
        case starShipsGetTypes.GET_ONE_STAR_SHIP_FAILED:
            return { ...state, error: action.payload, status: 'error' }
        case starShipsGetTypes.GET_ONE_STAR_SHIP_PENDING:
            return { ...state, error: null, status: 'pending' }
        default: return state;
    }
}
