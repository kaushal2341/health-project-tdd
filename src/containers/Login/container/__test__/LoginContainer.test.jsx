import React from 'react';
import LoginContainer from '..';
import Login from '../../';
import configureMockStore from 'redux-mock-store';
expect.addSnapshotSerializer(enzymeSerializer)
describe('Login Container', () => {
            let wrapper, mockStore, store, mockLoginfn;
            beforeEach(() => {
                    ;
                    mockLoginfn = jest.fn();
                    let initialState = {
                        token: ''
                    }
                    mockStore = configureMockStore();
                    store = mockStore(initialState);
                    wrapper = shallow(<LoginContainer store={store}/>)
                    });

                it('should be defined', () => {
                    expect(wrapper).toBeDefined();
                });

                it('should have one Login Component', () => {
                    console.log(wrapper.props())
                    expect(wrapper.props().children.props.login).toBeDefined();
                });

                it('should have state mapped into props connected to store',() => {
                    expect(wrapper.props().children.props.token).toBeDefined();
                })

                describe('Snap Shot Testing', () => {
                    it('should create or match previous snapshot of the component', () => {
                      expect(wrapper).toMatchSnapshot();
                    });
                  });

            })