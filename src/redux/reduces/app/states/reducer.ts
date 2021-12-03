import { initState } from "."
import { user } from "../../../types"


export const states = (state = initState, action: any) => {
    switch (action.type) {
        case user.SET_AUTHENTICATED:
            return { isAuthenticated: action.payload }
        default: return state
    }
}
