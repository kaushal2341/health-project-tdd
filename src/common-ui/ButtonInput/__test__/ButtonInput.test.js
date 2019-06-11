import React from 'react';
import ButtonInput from '..'
import { Button } from '@material-ui/core';

expect.addSnapshotSerializer(enzymeSerializer);
describe('Button Component', () => {
    let wrapper,
        onClickMock;
    beforeEach( () => {
        onClickMock = jest.fn()
        wrapper = mount(<ButtonInput type="submit" buttonName="Submit" onClickHandler={onClickMock}></ButtonInput>)
    });
    afterEach(()=>{
        wrapper.unmount()
    })
    
    it( 'should be defined' , () => {
       expect(wrapper).toBeDefined();
    });
    
    it( 'should have only one button' , () => {
        expect(wrapper.find('button')).toHaveLength(1)
    });
    
    it('should show name of the button',()=>{
        expect(wrapper.find('button').text()).toEqual(wrapper.prop('buttonName'));
    })

    it('should  have the exactly given props props',()=>{
        const propsToCheck= ['id','type','children','classes','onClick','fullWidth','size','disabled','href','variant','component','disableFocusRipple','disableRipple','color'];
        let buttonInputPropsKeys=Object.keys(wrapper.find(Button).props());
        propsToCheck.map((reqProp,i)=>{
            expect(reqProp).toContain(buttonInputPropsKeys[i]);
        })        
    });
    it('should only have type of submit or button', ()=>{
     const typeValue =['submit','button'];
     expect(typeValue).toContain(wrapper.find(Button).prop('type'))
    });
    describe('Button Input Simulation',()=>{
        let clickCallback;
        beforeEach(() => {
            clickCallback = jest.spyOn(wrapper.instance(),'onClickHandler');
            wrapper.instance().forceUpdate(); 
            wrapper.find(Button).simulate('click');
              
        });
        it('should call the onClick fuction handler when it is clicked',() => {
         expect(clickCallback).toHaveBeenCalled();
        });
        it('should call the props onClikHandler function after button is Clicked',() =>{
          expect(onClickMock).toHaveBeenCalled();
        })
    });
    describe('Snap Shot Testing',() => {
        it('should create or match previous snapshot of the component',() => {
            expect(wrapper).toMatchSnapshot(); 
        });
    })
})