import React from 'react';
import Login from '..';
import {
  Form,
  Input,
  Button,
  Message
} from 'semantic-ui-react';
import {
  TextInput,
  PasswordInput,
  ButtonInput
} from '../../../common-ui';
expect.addSnapshotSerializer(enzymeSerializer);
describe('Login Container Testing', () => {
  let wrapper, wrapper1;
  beforeEach(() => {
    wrapper = mount(< Login />)
    wrapper1 = shallow(<Login/>)
    
  }); afterEach(() => {
    wrapper.unmount()
  });

  it(' should render the login component successfully ', () => {
    expect(wrapper).toBeDefined();
  });

  it(' should have only one Form tag field ', () => {
    expect(wrapper.find(Form)).toHaveLength(1);
  });

  it('should have only one Text Field ', () => {
    expect(wrapper.find(TextInput)).toHaveLength(1);
  });

  it('should have the give props available to Text Field', () => {
    const textProps = ['placeholder', 'name', 'type', 'onChangeHandler']
    const textInputProps = Object.keys(wrapper1.find(TextInput).props());
    textProps.map((textProp, i) => {
      expect(textProps).toContain(textInputProps[i]);
    });
  });

  it('should have onChangeHandler function', () => {
    expect(wrapper.instance().onChangeHandler).toBeDefined();
  });

  it('should have only one Password Field', () => {
    expect(wrapper.find(PasswordInput)).toHaveLength(1);
  });

  it('should have the given props available for password field', () => {
    const passProps = ['placeholder', 'name', 'onChangeHandler']
    const passInputProps = Object.keys(wrapper1.find(PasswordInput).props())
    passProps.map((passProp, i) => {
      expect(passProps).toContain(passInputProps[i]);
    });
  });

  it('should have only one submit Button Field', () => {
    expect(wrapper1.find(ButtonInput)).toHaveLength(1);
  });

  it('should have the given props available for button', () => {
    const buttonProps = ['type', 'buttonName', 'onClickHandler']
    const buttonInputProps = Object.keys(wrapper1.find(ButtonInput).props())
    buttonProps.map((buttonProp, i) => {
      expect(buttonProps).toContain(buttonInputProps[i]);
    });
  });

  it('should have submitFormHandler function', () => {
    expect(wrapper.instance().submitFormHandler).toBeDefined();
  })

  it('should have state for all the input field except button', () => {
    const states = ['userCredential', 'password', 'errorMsg'];
    const statesFromComp = Object.keys(wrapper.state());
    states.map((state, i) => {
      expect(states).toContain(statesFromComp[i]);
    })
  });

  it('should have atleast one Message field', () => {
    expect(wrapper.find(Message)).toHaveLength(1);
  })

  describe('Input Simulation Change', () => {
    it('should change the value of state of username when Text Input is changed', () => {
      wrapper.find(TextInput).find(Input).find('input').simulate('change', {
        target: {
          name: "username",
          value: "kaushal@gmail.com"
        }
      });
      expect(wrapper.state('username')).toEqual('kaushal@gmail.com');
    });

    it('should change the value of state of password when Password Input is changed', () => {
      wrapper.find(PasswordInput).find(Input).find('input').simulate('change', {
        target: {
          name: "password",
          value: "Flasher234@@"
        }
      });
      expect(wrapper.state('password')).toEqual('Flasher234@@');
    });

    describe('Form Submit Simulation', () => {
      let submitCallBack;
      beforeEach(() => {
        submitCallBack = jest.spyOn(wrapper.instance(), 'submitFormHandler');
        wrapper.instance().forceUpdate();

      });
      it('should submit the form and prevent reloading when form is submitted with non empty value', () => {
        wrapper.find(ButtonInput).last().find(Button).find('button').simulate('click')
        expect(submitCallBack).toHaveBeenCalled()
      });

      it('should not submit the form if all the value is not provided and provide errorMsg for form', () => {

        wrapper.find(ButtonInput).last().find(Button).find('button').simulate('click')
        expect(wrapper.state('errorMsg').length).toBeGreaterThan(0);
      });

      it('should submit the form if all the value is  provided and donot provide errorMsg for form', () => {
        wrapper.setState({
          username: 'kaushal123',
          password: 'flasher@123'
        })
        expect(wrapper.state('errorMsg').length).toBe(0)
      })
    });

});


describe('Snap Shot Testing', () => {
    it('should create or match previous snapshot of the component', () => {
      expect(wrapper1).toMatchSnapshot();
    });
  });
});