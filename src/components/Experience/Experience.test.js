import React from 'react';
import { shallow } from 'enzyme';
import Experience from './Experience';

describe('Experience Component', () => {
  test('renders without crashing', () => {
    shallow(<Experience />);
  })
});
