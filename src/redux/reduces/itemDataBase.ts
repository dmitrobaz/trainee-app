const initState: any = {
    people: {},
    starships: {}
}

export const itemDataBase = (state = initState, action: any) => {
    switch (action.type) {
        case ('SET_ITEMS'):
            const type = action.payload.type
            const data = action.payload.data
            return { ...state, [type]: { ...state.items, data } }
        default: return state;
    }
}