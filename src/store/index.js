import {createStore} from 'redux';
import {loginState} from '../containers/Login/reducers'
export const store =createStore(loginState);