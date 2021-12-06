import { combineReducers } from 'redux';

import { cart } from './app/cart';
import { states } from './app/states';
import { users } from './app/users';

import { people } from './request/people';
import { starships } from './request/starships';

const rootReducer = combineReducers({

    app: combineReducers({
        cart,
        users,
        states
    }),

    request: combineReducers({
        people,
        starships,
    })
})

export default rootReducer;