interface IInitState {
    users: Array<any>,
    cart: {
        people: Array<any>,
        starships: Array<any>
    }

}


const initState: IInitState = {
    users: [],
    cart: {
        people: [],
        starships: []
    }
}

export const applicationStates = (state = initState, action: any) => {
    switch (action.type) {
        case 'ADD_NEW_USER':
            if (state.users.some((item: any) => item?.email === action.payload.email)) {
                return { ...state }
            } else {
                return {
                    ...state,
                    users: [...state.users.filter((e: any) => e.login), action.payload]
                }
            }
        case 'ADD_PEOPLE_ITEM_TO_CART':
            return { ...state, cart: { ...state.cart, people: [...state.cart.people, action.payload] } }
        case 'ADD_STAR_SHIP_ITEM_TO_CART':
            return { ...state, cart: { ...state.cart, starships: [...state.cart.starships, action.payload] } }
        default: return state
    }
}
