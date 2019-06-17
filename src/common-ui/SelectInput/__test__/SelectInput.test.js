import React from 'react';
import  {Dropdown} from 'semantic-ui-react';
import SelectInput from  '..';
expect.addSnapshotSerializer(enzymeSerializer);
describe('SelectInput Component', () => {
    let wrapper,onChangeMock;
    beforeEach(() => {
    onChangeMock = jest.fn();    
    wrapper = mount(<SelectInput 
                    value="hello" 
                    options={[{key:'hello',text:'me',value:'i'},{key:'hi',text:'you',value:'yours'}]}
                    onChangeHandler={onChangeMock}
                    />
                   )
    })
    it('should be defined and render successfully', () => {
     expect(wrapper).toBeDefined();
    });
    it('should have only one select input tag', () => {
     expect(wrapper.find(Dropdown)).toHaveLength(1); 
    });
    it('should have the prop options available', () => {
        console.log(wrapper.prop('value'))
    expect(wrapper.prop('options')).toBeDefined();
    });
    it('should have the properties of options equal to key text value',() => {
    expect(wrapper.prop('options')).toEqual([{key:'hello',text:'me',value:'i'},{key:'hi',text:'you',value:'yours'}]);    
    })
    it('should have the given props available',() => {
    const propsToCheck =['name',
                         'additionLabel',
                         'additionPosition',
                         'allowAdditions',
                         'as',
                         'basic',
                         'button',
                         'children',
                         'className',
                         'multiple',
                         'clearable',
                         'closeOnChange',
                         'compact',
                         'deburr',
                         'open',
                         'defaultOpen',
                         'defaultUpward',
                         'defaultValue',
                         'direction',
                         'disabled',
                         'error',
                         'floating',
                         'fluid',
                         'header',
                         'icon',
                         'inline',
                         'item',
                         'labeled',
                         'lazyLoad',
                         'loading',
                         'minCharacters',
                         'noResultsMessage',
                         'onAddItem',
                         'onBlur',
                         'onChange',
                         'onClick',
                         'onClose',
                         'onFocus',
                         'onLabelClick',
                         'onMouseDown',
                         'onOpen',
                         'onSearchChange',
                         'openOnFocus',
                         'options',
                         'placeholder',
                         'pointing',
                         'renderLabel',
                         'scrolling',
                         'search',
                         'searchInput',
                         'searchQuery',
                         'selectOnBlur',
                         'selectOnNavigation',
                         'selectedLabel',
                         'selection',
                         'simple',
                         'tabIndex',
                         'text',
                         'trigger',
                         'upward',
                         'value',
                         'wrapSelection',
                         'closeOnBlur'
                        ];
    let propsOfSelect = Object.keys(wrapper.find(Dropdown).props());
    propsToCheck.map((propCheck , i) => {
        expect(propsToCheck).toContain(propsOfSelect[i]);
    });
    });
describe('Select Input Simulation ' , () => {
let changeCallback;    
beforeEach(()=>{
    changeCallback = jest.spyOn(wrapper.instance(),'onChangeHandler');
    wrapper.instance().forceUpdate(); 
    wrapper.find(Dropdown).simulate('change');
}); 

it('should call the function onChangeHandler when input is changed', () => {
    expect(changeCallback).toHaveBeenCalled();
});

it('should call the props function onChangeHandler when input is changed', () => {
    expect(onChangeMock).toHaveBeenCalled();
});
});    

describe('Snap Shot Testing',() => {
        it('should create or match previous snapshot of the component',() => {
            expect(wrapper).toMatchSnapshot(); 
        });
    })
})