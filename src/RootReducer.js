import {combineReducers} from 'redux'
import MainReducer from './component/MainReducer'
import ApiReducer from './component/ApiReducer'
import UpdateReducer from './component/UpdateReducer'


const RootReducer = combineReducers({
    MainReducer : MainReducer,
    ApiReducer : ApiReducer,
    UpdateReducer:UpdateReducer
})

export default RootReducer;