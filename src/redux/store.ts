import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reduces';
import thunk from 'redux-thunk';

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


export default store;