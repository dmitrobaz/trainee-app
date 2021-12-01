const initState: any = {
    people: {
        pending: true,
        error: '',
        data: {}
    },
    starships: {
        pending: true,
        error: '',
        data: {}
    }
}

export const requestsStates = (state = initState, action: any) => {

    switch (action.type) {
        case 'SET_PEOPLE_TO_STORE_SUCCES':
            return { ...state, people: action.payload }
        case 'SET_PEOPLE_TO_STORE_FAILED':
            return { ...state, people: action.payload }
        case 'SET_PEOPLE_TO_STORE_PENDING':
            return { ...state, people: action.payload }
        case 'SET_STAR_SHIPS_TO_STORE_SUCCES':
            return { ...state, starships: action.payload }
        case 'SET_STAR_SHIPS_TO_STORE_FAILED':
            return { ...state, starships: action.payload }
        case 'SET_STAR_SHIPS_TO_STORE_PENDING':
            return { ...state, starships: action.payload }
        default: return state;
    }
}