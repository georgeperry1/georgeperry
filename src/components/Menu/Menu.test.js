import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu Component', () => {
  test('renders without crashing', () => {
    shallow(<Menu />);
  })
});
