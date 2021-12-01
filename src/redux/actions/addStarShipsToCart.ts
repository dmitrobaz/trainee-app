interface IPayload {
    [key: string]: any
}

export const addStarShipsToCart = (payload: IPayload) => ({
    type: 'ADD_STAR_SHIP_ITEM_TO_CART',
    payload
})
