import {login} from '../action/constants';        

export const loginState =(state={token:''},action) =>{
    switch(action.type) {
        case login.AUTH: return ({...state,
                                  token:action.payload
                                });
        default:return state;
    }
 

};