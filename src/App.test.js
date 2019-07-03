import React from 'react';
import App from './App';
describe('App Component Testing', () => {
    let wrapper;
    beforeEach(() => {
        wrapper=shallow(<App/>)
    })
    it('renders without crashing', () => {
        expect(wrapper).toBeDefined(); 
    });
})

