import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const initialState = {};

// Third-party middleware that will be implement within the store
const middleware = [thunk];

// Creates the store which uses rootReducer to work on the store's copied data
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;