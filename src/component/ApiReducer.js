import {createStore} from 'redux'

const initialState = {
    apiData : []
}

const ApiReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'API_FETCH':
            return{
                apiData:action.payload
            }
    
        default:
            return state
    }
}

export default ApiReducer