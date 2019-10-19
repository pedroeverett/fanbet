import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const component = shallow(<App />);
  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should contain 1 div element', () => {
    expect(component.find('div').length).toBe(1);
  })

  it('should contain main div', () => {
    expect(component.find('.App-main').exists()).toBe(true);
  })
});
