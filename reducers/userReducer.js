import { GET_USERS, NEW_USER } from '../actions/types'

const initialState = {
    items: [
        {
            login: 'john123',
            password: 'john321',
            name: 'John',
            age: '33'
        },
        {
            login: 'geralt123',
            password: 'geralt321',
            name: 'Geralt',
            age: '35'
        },
        {
            login: 'nick123',
            password: 'nick321',
            name: 'Nick',
            age: '21'
        }
    ],
    item: {}
}

// Reducer that perform some operations on the store, based on action's type and payload
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state
            }
        case NEW_USER:
            state.items.push(action.payload);
            return {
                ...state,
                item: action.payload
            }
        default:
            return {
                ...state
            }
    }
}