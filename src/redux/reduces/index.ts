import { combineReducers } from 'redux';

import { usersDataBase } from './usersDataBase';
import { itemDataBase } from './itemDataBase';
import { cart } from './cart';






const rootReducer = combineReducers({
    usersDataBase,
    itemDataBase,
    cart
})

export default rootReducer;