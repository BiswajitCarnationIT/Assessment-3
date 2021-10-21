import {createStore} from 'redux'

const initialState = {
    fullName : ''
}

const reducer = (state = initialState,action) => {
    console.log('reducer',action);
    switch (action.type){
        case 'FULLNAME_CHANGE':
            return Object.assign({},state,{fullName : action.text});  //newobj existingState changeObject
        default:
            return state;
    }
    
}

const store = createStore(reducer)
export default store;