import axios from "axios";
import { starships } from "../../types";


export const getStarShipsResponse = {
    get: function () {

        return (dispatch: any) => {
            dispatch(this.getPending())
            return axios.get('https://swapi.dev/api/starships')
                .then(({ data }) => {
                    dispatch(this.getSucces(data))
                })
                .catch((error) => dispatch(this.getFailed(error)))
        }

    },

    getSucces: (data: any) => ({
        type: starships.GET_ALL_STAR_SHIPS_SUCСESS,
        payload: data
    }),

    getFailed: (data: string) => ({
        type: starships.GET_ALL_STAR_SHIPS_FAILED,
        payload: data
    }),

    getPending: () => ({
        type: starships.GET_ALL_STAR_SHIPS_PENDING
    }),

}