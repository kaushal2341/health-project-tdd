import App from '../App';
import React from 'react'
import {Provider} from 'react-redux';
import {store} from '../store'
export const app = (<Provider store={store}><App></App></Provider>)


