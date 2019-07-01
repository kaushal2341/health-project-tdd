import React from 'react';
import PasswordInput from '..';
import {Input} from 'semantic-ui-react';
expect.addSnapshotSerializer(enzymeSerializer);
describe('Password Input',()=>{
let wrapper;
let onChangeMockFunc;
beforeEach(()=>{
onChangeMockFunc = jest.fn()
wrapper = mount(<PasswordInput onChangeHandler={onChangeMockFunc}/>);
});
afterEach(()=>{
    wrapper.unmount()
})
it('should be defined',()=>{
   expect(wrapper).toBeDefined();
});
it('should have only one input tag element',()=>{
    expect(wrapper.find('input')).toHaveLength(1);
});
it('should have password input tag element',()=>{
    expect(wrapper.find('input').prop('type')).toBe('password');
});
it('should have the given props in input tag element',()=>{
    const reqProps=['id',
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
                    'disabled',
                    'value'
                  ]
    let passwordInputPropsKeys=Object.keys(wrapper.find(Input).props());
    reqProps.map((reqProp,i)=>{
        expect(reqProps).toContain(passwordInputPropsKeys[i]);
    })
});
it('should have one span tag element to show error msg',()=>{
    expect(wrapper.find('span')).toHaveLength(1);
})
describe('Password Input Simulation',()=>{
    function simulationChange(value){
        wrapper.find('input').simulate('change',value);
    }
    it('should call the onChange function when input is changed',()=>{
        simulationChange({target:{value:'sdsdsd'}})
        expect(onChangeMockFunc).toHaveBeenCalledTimes(1); 
    });
    
    it('should have state of errorMsg ',()=>{
        expect(Object.keys(wrapper.state())).toContain('errorMsg');
    });

    it('should show the error message when the length is less than 6',()=>{
        simulationChange({target:{value:'abcd'}});
        expect(wrapper.state('errorMsg')).toEqual('Sorry the length Of password must be greater than 5');
    });

    it('should not show the error message when the length is less than 1',()=>{
        simulationChange({target:{value:''}});
        expect(wrapper.state('errorMsg')).toEqual('');
    });

    it('should show WEAK error message when the value match weak regexPolicy',()=>{
        simulationChange({target:{value:'abcdef'}});
        expect(wrapper.state('errorMsg')).toEqual('WEAK');
    });
    it('should show STRONG error message when the value match strong regexPolicy',()=>{
        simulationChange({target:{value:'abcdefABCDEF123@@#'}});
        expect(wrapper.state('errorMsg')).toEqual('STRONG');
    });
    it('should show MEDIUM error message when the value match strong regexPolicy',()=>{
        simulationChange({target:{value:'abcdef1'}});
        expect(wrapper.state('errorMsg')).toEqual('MEDIUM');
    });
    it('should have state of showPassword ',()=>{
        expect(Object.keys(wrapper.state())).toContain('showPassword');
    });
    it(' should have only one i tag', ()=>{
        expect(wrapper.find('i')).toHaveLength(1);
    });
    
    it('should have onClick prop on tag i', () => {
      expect(wrapper.find('i').prop('onClick')).toBeDefined()
    });
    
    it('should change showPassword value when clicked on tag i',()=>{
      wrapper.find('i').simulate('click');
      expect(wrapper.state('showPassword')).toBeFalsy();    
    });
    
});
   describe('Snapshot Testing',()=>{
        it('should create or match previous snapshot of the component',() => {
            expect(wrapper).toMatchSnapshot(); 
        });
    });
   
})