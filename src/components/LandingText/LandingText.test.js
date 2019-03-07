import React from 'react';
import { shallow } from 'enzyme';
import LandingText from './LandingText';

describe('LandingText Component', () => {
  test('renders without crashing', () => {
    shallow(<LandingText />);
  })
});
