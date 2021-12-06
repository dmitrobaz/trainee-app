import axios from "axios";
import { people } from "../../types";

export const getOnePeopleResponse = {
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
        type: people.GET_ONE_PEOPLE_SUCСESS,
        payload: data
    }),

    getFailed: (data: string) => ({
        type: people.GET_ONE_PEOPLE_FAILED,
        payload: data
    }),

    getPending: () => ({
        type: people.GET_ONE_PEOPLE_PENDING
    }),

}