import { combineReducers } from 'redux';

import { usersDataBase } from './usersDataBase';
import { itemDataBase } from './itemDataBase';





const rootReducer = combineReducers({
    usersDataBase,
    itemDataBase
})

export default rootReducer;