import React from 'react';
import { shallow } from 'enzyme';
import FindMe from './FindMe';

describe('FindMe Component', () => {
  test('renders without crashing', () => {
    shallow(<FindMe />);
  })
});
