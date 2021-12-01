import { combineReducers } from 'redux';

import { usersDataBase } from './applicationReduces/usersDataBase';
import { itemDataBase } from './requestsReduces/itemDataBase';
import { cart } from './applicationReduces/cart';
import { requestsStates } from './requestsReduces/requestsStates';







const rootReducer = combineReducers({
    usersDataBase,
    itemDataBase,
    cart,
    requestsStates
})

export default rootReducer;