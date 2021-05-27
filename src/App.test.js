import '@testing-library/jest-dom'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from "./App";
import TareasLista from "./TareasLista"


beforeAll(() => {
  configure({ adapter: new Adapter() });

});

test('App.js tiene 1 componente hijo TareasLista.js | Asegurate de renderizar 1 vez el componente <TareasLista> dentro de App.js', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(TareasLista).length).toBe(1);
});

test('App.js tiene 1 <input type="text"> | Asegurate de renderizar 1 vez un <input type="text" /> dentro de App.js', () => {
  const wrapper = shallow(<App />);
  const input = wrapper.find('input[type="text"]')
  expect(input).toBeDefined();
  expect(input.length).toBe(1);
});

test('App.js tiene 2 botones con texto | Asegurate de renderizar 2 botones con texto dentro de App.js', () => {
  const wrapper = shallow(<App />);
  const buttons = wrapper.find('button')
  expect(buttons).toBeDefined();
  expect(buttons.length).toBe(2);
  expect(buttons.at(0).text().trim()).not.toBe("");
  expect(buttons.at(1).text().trim()).not.toBe("");
});


test('App.js tiene 1 div con texto | Asegurate de renderizar 1 div con texto dentro de App.js', () => {
  const wrapper = shallow(<App />);
  const div = wrapper.find('div')
  expect(div).toBeDefined();
  expect(div.length).toBe(1);
  expect(div.first().text().trim()).not.toBe("");
});

test('App.js utiliza el hook useState | Asegurate de utilizar el hook useState dentro de App.js', () => {
  const appDefinition = App.toString()

  expect(appDefinition).toContain('const [tareas, setTareas] = (0, _react.useState)([]);')
})