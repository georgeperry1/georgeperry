import React from 'react';
import { shallow } from 'enzyme';
import Technologies from './Technologies';

describe('Technologies Component', () => {
  test('renders without crashing', () => {
    shallow(<Technologies />);
  })
});
