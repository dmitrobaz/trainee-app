interface IActionProps {
    login: string,
    password: string,
    type: string,
    payload: string
}


const initState = {
    login: '',
    password: '',
    email: ''
}

export const items = (state = initState, action: any) => {
    switch (action.type) {
        case ('SET_NEW_USER'):
            return {
                ...state,
                login: action.payload.login,
                password: action.payload.password,
                email: action.payload.email
            }
        default: return state
    }
}
