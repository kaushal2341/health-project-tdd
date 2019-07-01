import React from 'react';
import TextInput from '..';
import ReactDOM from 'react-dom';
import {Input} from 'semantic-ui-react';
expect.addSnapshotSerializer(enzymeSerializer);
describe('TextInput Component',()=>{
    let wrapper;
    let onChangeMock2;
    beforeEach(()=>{
         onChangeMock2= jest.fn();
         wrapper = mount(<TextInput type="text"  onChangeHandler={onChangeMock2}></TextInput>)
    });
    afterEach(()=>{
        wrapper.unmount()
    })
    it('should be defined',()=>{
        expect(wrapper).toBeDefined();
    })
    
    it('should render successfully',()=>{
        const input = document.createElement('input');
        ReactDOM.render(<TextInput/>, input);
        ReactDOM.unmountComponentAtNode(input);
    });
    
    it('should have only one input tag element',()=>{
        expect(wrapper.find('input')).toHaveLength(1);
    });

    it('should have text input tag element',()=>{
        const numberInput = wrapper.find('input').prop('type');//to find the attribute of element
        //wrapper.find('input').instance().props to find the props attribute
        expect(numberInput).toBe('text'); 
    });

    it('should have the given props',()=>{
        let propsObj=['id',
                      'name',
                      'type',
                      'minLength',
                      'maxLength',
                      'onChange',
                      'onBlur',
                      'onFocus',
                      'className',
                      'placeholder',
                      'required',
                      'readOnly',
                      'children',
                      'error',
                      'fluid',
                      'focus',
                      'icon',
                      'iconPosition',
                      'inverted',
                      'label',
                      'labelPosition',
                      'loading',
                      'size',
                      'transparent',
                      'tabIndex',
                      'action',
                      'actionPosition',
                      'disabled'
                    ];
        let propsInInput =Object.keys(wrapper.find(Input).props());
        propsObj.map((propObj,i)=>{
             expect(propsObj).toContain(propsInInput[i]); 
        });
    });
    describe('Simulation of input event',()=>{
    let changeCallback,
        valueToCheck;
    function simulation(value){
        changeCallback = jest.spyOn(wrapper.instance(),'onChangeHandler');
        wrapper.instance().forceUpdate(); 
        wrapper.find('input').simulate('change',value);
    }
    it('should call the props onChangeHandler function when input value is invalid',()=>{
        simulation({target:{value:'a@gmail.com'}})
        expect(onChangeMock2).toHaveBeenCalledTimes(1);
    });

    it('should show error when input value is invalid',()=>{
        simulation({target:{value:'abc@'}})
        expect(wrapper.state('errorMsg')).toEqual('Email Was Not Matched')
    });
    it('should call the function when input value doesnot contain @ character',() => {
        simulation({target:{value:'abc'}})
        expect(onChangeMock2).toHaveBeenCalled();
    });
    it('should call the function onChangeHandler when the input is change',() => {
        expect(changeCallback).toHaveBeenCalled();    
    });
    
    describe('Snap Shot Testing',()=>{
        it('should match the previous snapshot/if new then create a new snapshot',()=>{
            expect(wrapper).toMatchSnapshot();
        });
    })
});
});

