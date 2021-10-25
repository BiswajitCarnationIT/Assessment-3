import {combineReducers} from 'redux'
import MainReducer from './component/MainReducer'
import ApiReducer from './component/ApiReducer'
import UpdateReducer from './component/UpdateReducer'
import toBeUpdatedReducer from './component/toBeUpdatedReducer'


const RootReducer = combineReducers({
    MainReducer : MainReducer,
    ApiReducer : ApiReducer,
    UpdateReducer:UpdateReducer,
    toBeUpdatedReducer:toBeUpdatedReducer
})

export default RootReducer;