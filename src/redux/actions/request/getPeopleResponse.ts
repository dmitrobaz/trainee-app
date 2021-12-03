import axios from "axios";
import { people as peopleGetTypes } from "../../types";

export const getPeopleResponse = {
    get: function () {

        return (dispatch: any) => {
            dispatch(this.getPending())
            return axios.get('https://swapi.dev/api/people')
                .then(({ data }) => {
                    dispatch(this.getSucces(data))
                })
                .catch((error) => dispatch(this.getFailed(error)))
        }

    },

    getSucces: (data: any) => ({
        type: peopleGetTypes.GET_ALL_PEOPLE_SUCСESS,
        payload: data
    }),

    getFailed: (error: string) => ({
        type: peopleGetTypes.GET_ALL_PEOPLE_FAILED,
        payload: error
    }),

    getPending: () => ({
        type: peopleGetTypes.GET_ALL_PEOPLE_PENDING
    }),

}