import {combineReducers} from 'redux'
import MainReducer from './component/MainReducer'
import ApiReducer from './component/ApiReducer'



const RootReducer = combineReducers({
    MainReducer : MainReducer,
    ApiReducer : ApiReducer
})

export default RootReducer;