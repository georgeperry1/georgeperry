import React from 'react';
import { shallow } from 'enzyme';
import OrbitMacBook from './OrbitMacBook';

describe('OrbitMacBook Component', () => {
  test('renders without crashing', () => {
    shallow(<OrbitMacBook />);
  })
});
