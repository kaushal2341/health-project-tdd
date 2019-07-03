import configureStore from 'redux-mock-store';
import {authenticate} from '..'

describe('Actions for login component testing', () => {
    let mockStore,store;
    beforeEach(() => {
        mockStore = configureStore();
        store = mockStore();
    })  

    it('should be defined', () => { 
        expect(authenticate).toBeDefined();
    });

    it('authenticate action should be  the function type',()=>{
       expect(typeof authenticate).toBe('function');
    });

    it('aunthenticate action should return  the required object' , () => {
        let payload ={};
        const expectedActions ={
              'payload': '',
              'type': 'LOGIN_AUTHENTICATE',
        };
        const auth =store.dispatch(authenticate(""));
        expect(auth).toEqual(expectedActions);
    });
})
