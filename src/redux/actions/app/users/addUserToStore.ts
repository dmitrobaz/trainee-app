import { user } from "../../../types"

interface IPayload {
    [key: string]: any
}

export const addUserToStore = (payload: IPayload) => ({
    type: user.ADD_NEW_USER,
    payload
})