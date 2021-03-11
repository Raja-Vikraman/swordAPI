import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {reducers} from './reducers.js'


const rootReducer = combineReducers({apiStore:reducers})
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store