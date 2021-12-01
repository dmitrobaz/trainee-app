interface IPayload {
    [key: string]: any
}

export const addPeopleToCart = (payload: IPayload) => ({
    type: 'ADD_PEOPLE_ITEM_TO_CART',
    payload
})
