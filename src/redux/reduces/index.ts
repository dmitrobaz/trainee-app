import { combineReducers } from 'redux';


import { requestsStates } from './requestsReduces/requestsStates';
import { applicationStates } from './applicationReduces/applicationStates';






const rootReducer = combineReducers({
    applicationStates,
    requestsStates
})

export default rootReducer;