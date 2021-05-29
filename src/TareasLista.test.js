import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import TareasLista from './TareasLista';

beforeAll(() => {
  configure({ adapter: new Adapter() });
});

test('TareasLista tiene 1 <div> | Asegúrate de que tengas 1 <div> dentro de TareasListas.js', () => {
  const wrapper = shallow(<TareasLista />);
  const div = wrapper.find('div');
  expect(div).toBeDefined();
  expect(div.length).toBe(1);
});

test('<div> de TareasLista contiene el texto "Hello World" | Asegúrate de que dentro del <div> de TareasLista escribas "Hello World"', () => {
  const wrapper = shallow(<TareasLista />);
  const div = wrapper.find('div').first();
  expect(div.html()).toContain('Hello World');
});
