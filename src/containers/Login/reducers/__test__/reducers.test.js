import {loginState} from '..';
import {authenticate} from '../../action';
describe('Login Reducers Test' , () => {
    it('should be defined' , () => {
      expect(loginState).toBeDefined();
    });
    it('should be type of function' , () => {
      expect(typeof loginState).toBe("function");
    });
    it('should have the state changed after action dispatches',() => {
        let initialState = {}
        const auth = authenticate('abcdef')
        const newState = loginState(initialState,auth);
        expect(newState).toEqual({
            token:'abcdef'
        });
    });

    it('should provide the same state  after no action dispatch',() => {
      let initialState = {}
      let auth = {type:'GET'}
      const newState = loginState(initialState,auth);
      expect(newState).toEqual({});
  });
})