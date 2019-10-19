import React from 'react';
import { shallow } from 'enzyme';
import ResultModal from './ResultModal';

describe('ResultModal', () => {
  const component = shallow(<ResultModal />);
//   const { player } = component.props
  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

//   it('should get props correctly', () => {
//     expect(player.first_name).toBe('pedro');
//   });

//   it('should contain 1 div element', () => {
//     expect(component.find('div').length).toBe(1);
//   })

});