import React from 'react';
import LoginContainer from '..';
import Login from '../../';
import configureMockStore from 'redux-mock-store';
import {
    authenticate
} from '../../action';
import {
    ButtonInput
} from '../../../../common-ui';
import {
    Button
} from 'semantic-ui-react';
expect.addSnapshotSerializer(enzymeSerializer)
describe('Login Container', () => {
            let wrapper, mockStore, store, mockLoginfn;
            let wrapper2;
            beforeEach(() => {
                mockLoginfn = jest.fn();
                let initialState = {
                    token: ''
                }
                mockStore = configureMockStore();
                store = mockStore(initialState);
                wrapper = shallow( < LoginContainer store = {
                        store
                    }
                    getTokenAfterLogin = {
                        mockLoginfn
                    }
                    />)
                    wrapper2 = mount( < LoginContainer store = {
                            store
                        }
                        getTokenAfterLogin = {
                            mockLoginfn
                        }
                        />)  

                    });
                afterEach(() => {
                    wrapper2.unmount();
                })
                it('should be defined', () => {
                    expect(wrapper).toBeDefined();
                });

                it('should have one Login Component', () => {
                    expect(wrapper.props().children.props.login).toBeDefined();
                });

                it('should have state mapped into props connected to store', () => {
                    expect(wrapper.props().children.props.token).toBeDefined();
                });

                it('should call the dispatched function after user submit and get the token for user', () => {
                    const wrap = (wrapper2.find(Login))
                    const data = {
                        password: 'superadmin',
                        userCredential: 'superadmin'
                    }
                    wrap.setState({
                        password: 'superadmin',
                        userCredential: 'superadmin'
                    })

                    wrapper2.find(Button).find('button#f-submitter').simulate('click');
                    const dispatched = store.dispatch(authenticate(data));

                    expect(dispatched).toEqual({
                        payload: {
                            ...data
                        },
                        type: 'LOGIN_AUTHENTICATE'
                    })
                });

                describe('Snap Shot Testing', () => {
                    it('should create or match previous snapshot of the component', () => {
                        expect(wrapper2).toMatchSnapshot();
                    });
                });

            })