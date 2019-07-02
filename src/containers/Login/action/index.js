import {login} from './constants';
export const authenticate = (data) => ({
     payload:data,
     type:login.AUTH
});