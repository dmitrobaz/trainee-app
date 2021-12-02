import axios from "axios";

export const getOnePeopleResponse = {
    get: function (apiUrl: string) {

        return (dispatch: any) => {
            return axios.get(apiUrl)
                .then(({ data }) => {
                    dispatch(this.getSucces({ data: data, pending: false, error: '' }))
                })
                .catch((error) => dispatch(this.getFailed({ data: {}, pending: false, error: error })))
        }

    },

    getSucces: (data: any) => ({
        type: 'SET_ONE_PEOPLE_TO_STORE_SUCCES',
        payload: data
    }),

    getFailed: (data: any) => ({
        type: 'SET_ONE_PEOPLE_TO_STORE_FAILED',
        payload: data
    }),

    getPending: (data: any) => ({
        type: 'SET_ONE_PEOPLE_TO_STORE_PENDING',
        payload: data
    }),

}