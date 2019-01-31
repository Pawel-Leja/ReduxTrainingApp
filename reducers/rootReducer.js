import { combineReducers } from 'redux'
import userReducer from './userReducer'

// Root reducer which combines all other reducers
// It is the reducer that communicates with the store directly
export default combineReducers({
    users: userReducer
})