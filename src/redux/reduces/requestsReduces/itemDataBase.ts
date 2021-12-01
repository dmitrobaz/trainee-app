const initState: any = {
    people: {},
    starships: {}
}

export const itemDataBase = (state = initState, action: any) => {

    switch (action.type) {
        case 'SET_ITEMS': {
            const { type, data }: any = action.payload
            return { ...state, [type]: { ...state.items, data } }
        }
        default: return state;
    }
}