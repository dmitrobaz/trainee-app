import { people as peopleGetTypes } from "../../../types";
import { initState } from ".";

export const people = (state = initState, action: any) => {

    switch (action.type) {
        case peopleGetTypes.GET_ALL_PEOPLE_SUCСESS:
            return { ...state, data: action.payload, status: 'success' }
        case peopleGetTypes.GET_ALL_PEOPLE_FAILED:
            return { ...state, error: action.payload, status: 'error' }
        case peopleGetTypes.GET_ALL_PEOPLE_PENDING:
            return { ...state, error: null, status: 'pending' }

        case peopleGetTypes.GET_ONE_PEOPLE_SUCСESS:
            return { ...state, data: { results: [action.payload] }, status: 'success' }
        case peopleGetTypes.GET_ONE_PEOPLE_FAILED:
            return { ...state, error: action.payload, status: 'error' }
        case peopleGetTypes.GET_ONE_PEOPLE_PENDING:
            return { ...state, error: null, status: 'pending' }

        default: return { ...state };
    }
}
