// interface IActionProps {
//     login: string,
//     password: string,
//     type: string,
//     payload: string
// }


const initState: { [users: string]: any } = {
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
        case 'ADD_PEOPLE_TO_CART':
            return { ...state, cart: [...state.people, action.payload] }
        case 'ADD_STAR_SHIP_TO_CART':
            return { ...state, cart: [...state.starships, action.payload] }
        default: return state
    }
}
