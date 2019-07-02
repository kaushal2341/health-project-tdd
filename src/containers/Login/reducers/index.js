
let state={};

export const loginState =(state,action) =>{
    switch(action.type) {
        case 'LOGIN_AUTHENTICATE':console.log(state)
                                return ({...state,
                                         token:action.payload
                                         })
        default:return state;
    }
 

};