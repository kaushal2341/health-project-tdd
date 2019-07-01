import {authenticate} from '..'

describe('Actions for login component testing', () => {
    it('should be defined', () => { 
        expect(authenticate).toBeDefined();
    });

    it('authenticate action should be  the function type',()=>{
       expect(typeof authenticate).toBe('function');
    });

    it('aunthenticate action should return  the required object' , () => {
        let payload ={};
        const auth =authenticate(payload);
        expect(auth).toEqual({
            payload:payload,
            type:'LOGIN_AUTHENTICATE'
        })
    });
})
