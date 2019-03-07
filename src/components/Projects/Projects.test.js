import React from 'react';
import { shallow } from 'enzyme';
import Projects from './Projects';

describe('Projects Component', () => {
  test('renders without crashing', () => {
    shallow(<Projects />);
  })
});
