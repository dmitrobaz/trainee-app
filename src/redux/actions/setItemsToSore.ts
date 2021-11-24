import axios from 'axios';


interface IActionProps {
    login: string,
    password: string,
    type: string,
    payload: string
}


export const setLoaded = (payload: boolean) => ({
    type: 'SET_LOADED',
    payload
})

export const axiosItems = () => (dispatch: any) => {
    dispatch(setLoaded(false))

    axios.get('https://swapi.dev/api/people').then(({ data }) => {
        dispatch(setItemsToStore({ data: data, type: 'people' }))
    })
    
    axios.get('https://swapi.dev/api/starships').then(({ data }) => {
        dispatch(setItemsToStore({ data: data, type: 'starships' }))
    })
}

export const setItemsToStore = (payload: any) => ({
    type: 'SET_ITEMS',
    payload
})
