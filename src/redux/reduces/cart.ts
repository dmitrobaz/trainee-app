const initState: any = {
    people: [],
    starships: []
}

export const cart = (state = initState, action: any) => {

    switch (action.type) {

        case 'ADD_PEOPLE':
            return { ...state, [action.payload?.type]: [...state.people, action.payload.data] }
        case 'ADD_STAR_SHIPS':
            return { ...state, [action.payload?.type]: [...state.starships, action.payload.data] }

        default: return state;
    }
}