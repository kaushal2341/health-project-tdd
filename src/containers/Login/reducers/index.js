import {login} from '../action/constants';        
let state={};

export const loginState =(state,action) =>{
    switch(action.type) {
        case login.AUTH:console.log(state)
                                return ({...state,
                                         token:action.payload
                                         })
        default:return state;
    }
 

};