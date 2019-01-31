import { GET_USERS, NEW_USER } from '../actions/types';

// Functions which will tell the reducer what action to perform with the store
// based on action type and payload 
export function fetchUsers() {
    return {
        type: GET_USERS
    }
}

export function createUser(user) {
    return {
        type: NEW_USER,
        payload: user
    }
}

// Below same actions but asynchronous

// export function fetchUsers() {
//     return function (dispatch) {
//         dispatch({
//             type: GET_USERS
//         })
//     }
// }

// export function createUser(user) {
//     return function (dispatch) {
//         dispatch({
//             type: NEW_USER,
//             payload: user
//         })
//     }
// }