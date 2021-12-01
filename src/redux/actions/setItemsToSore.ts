import axios from 'axios';
import * as types from '../types'

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

// const people = {
//     get: function () {

//         this.getPending();

//         (dispatch: any) => {
//             return axios.get('https://swapi.dev/api/starships')
//                 .then(({ data }) => {
//                  dispatch(this.getSucces({ data: data, type: 'starships' }))
//             })
//         }
//     },

//     getSucces: (data: any) => ({
//         type: 'SET_ITEMS',
//         payload: data
//     }),

//     getFailed: (data: any) => ({
//         type: 'SET_ITEMS',
//         payload: data
//     }),

//     getPending: (data: any) => ({
//         type: 'SET_ITEMS',
//         payload: data
//     }),

// }
