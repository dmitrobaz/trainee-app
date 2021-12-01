import axios from 'axios';


export const axiosPeopleDataRequest = () => (dispatch: any) => {

    return axios.get('https://swapi.dev/api/people').then(({ data }) => {
        dispatch(setDataToStore({ data: data, type: 'people' }))
    })
}

export const axiosStarShipsDataRequest = () => (dispatch: any) => {

    return axios.get('https://swapi.dev/api/starships').then(({ data }) => {
        dispatch(setDataToStore({ data: data, type: 'starships' }))
    })
}

export const setDataToStore = (payload: any) => ({
    type: 'SET_ITEMS',
    payload
})
