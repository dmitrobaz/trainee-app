const initState: any = {
    items: [],
    isLoaded: { people: false, starships: false }
}

export const itemDataBase = (state = initState, action: any) => {
    switch (action.type) {
        case ('SET_ITEMS'):
            const type = action.payload.type
            const data = action.payload.data
            return { ...state, [type]: { ...state.items, data }, isLoaded: { ...state.isLoaded, [type]: true } }
        default: return state;
    }
}