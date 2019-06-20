import React from 'react';
import Login from '..';
import {Form} from 'semantic-ui-react';
import {TextInput,PasswordInput,SelectInput,ButtonInput} from '../../../common-ui';
describe('Login Container Testing',() => {
    let wrapper;
    beforeEach( () => {
     wrapper = mount(<Login/>)     
    }) 
  it('should render the login component successfully',() => {
    expect(wrapper).toBeDefined();
  });
  
  it('should have ony one Form tag field',() => {
    expect(wrapper.find(Form)).toHaveLength(1);
  })
});