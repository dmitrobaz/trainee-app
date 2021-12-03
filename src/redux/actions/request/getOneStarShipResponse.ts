import axios from "axios";
import { starships } from "../../types";

export const getOneStarShipResponse = {
    get: function (apiUrl: string) {

        return (dispatch: any) => {
            dispatch(this.getPending())

            return axios.get(apiUrl)
                .then(({ data }) => {
                    
                    dispatch(this.getSucces(data))

                })
                .catch((error) => dispatch(this.getFailed(error)))
        }
    },

    getSucces: (data: any) => ({
        type: starships.GET_ONE_STAR_SHIP_SUCСESS,
        payload: data
    }),

    getFailed: (data: string) => ({
        type: starships.GET_ONE_STAR_SHIP_FAILED,
        payload: data
    }),

    getPending: () => ({
        type: starships.GET_ONE_STAR_SHIP_PENDING
    }),

}