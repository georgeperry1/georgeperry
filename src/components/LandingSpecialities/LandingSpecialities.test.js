import React from 'react';
import { shallow } from 'enzyme';
import LandingSpecialities from './LandingSpecialities';

describe('LandingSpecialities Component', () => {
  test('renders without crashing', () => {
    shallow(<LandingSpecialities />);
  })
});
