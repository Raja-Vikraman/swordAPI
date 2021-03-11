import {CHECK_LOGIN, VIEW_USER, LIST_USER} from './actions.js'

let initialState = {
    authenticationResponse: {isAuthenticated:"N"},
    allUser:[],
    userInfo:{}
}

export function reducers(state=initialState, action) {
    if(action.type == CHECK_LOGIN) {
        return {
            ...state,
            authenticationResponse: action.payload
        }
    }
    else if(action.type == LIST_USER) {
        return {
            ...state,
            allUser: action.payload
        }
    }
    else if(action.type == VIEW_USER) {
        return {
            ...state,
            userInfo: action.payload
        }
    }
    return state
}