interface IActionProps {
    login: string,
    password: string,
    type: string,
    payload: string
}


const initState: any = {
    users: []
}

export const dataBase = (state = initState, action: any) => {
    switch (action.type) {
        case ('ADD_NEW_USER'):

            if (state.users.some((item: any) => item?.email === action.payload.email)) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    users: [...state.users.filter((e: IActionProps) => e.login), action.payload]
                }
            }

        default: return state
    }
}
