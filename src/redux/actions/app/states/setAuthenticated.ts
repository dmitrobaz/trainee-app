import { user } from "../../../types"

export const setAuthenticated = (payload: boolean) => ({
    type: user.SET_AUTHENTICATED,
    payload
})
