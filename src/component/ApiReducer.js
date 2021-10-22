import {createStore} from 'redux'

const initialState = {
    apiData : []
}

const ApiReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'API_FETCH':
            console.log("ApiReducer",action.data)
            return{
                apiData:action.data
            }
    
        default:
            return state
    }
}

export default ApiReducer