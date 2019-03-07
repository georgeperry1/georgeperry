import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('NavBar Component', () => {
  test('renders without crashing', () => {
    shallow(<NavBar />);
  })
});
