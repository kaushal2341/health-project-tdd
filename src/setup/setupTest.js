import Enzyme,{shallow,mount,render} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import enzymeSerializer from 'enzyme-to-json/serializer'

Enzyme.configure({adapter: new EnzymeAdapter()}); //configure adapter for enzyme
global.shallow = shallow;//making shallow global object
global.render = render;//making render global object
global.mount = mount;//making mount global object
global.enzymeSerializer =enzymeSerializer;//making enzymeSerializer global object