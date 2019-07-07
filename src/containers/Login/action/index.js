import {login} from './constants';
export const authenticate = (data) => {
     return {
     payload:data,
     type:login.AUTH
     }
};