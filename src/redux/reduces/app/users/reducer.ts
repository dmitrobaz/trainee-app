import { initState } from "."
import { user } from "../../../types"


export const users = (state = initState, action: any) => {
    switch (action.type) {
        case user.ADD_NEW_USER:
            if (state.some((item: any) => item?.email === action.payload.email)) {
                return [...state]
            } else {
                return [...state.filter((e: any) => e.login), action.payload]
            }
        default: return state
    }
}
