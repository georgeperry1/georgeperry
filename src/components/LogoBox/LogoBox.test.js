import React from 'react';
import { shallow } from 'enzyme';
import LogoBox from './LogoBox';

describe('LogoBox Component', () => {
  test('renders without crashing', () => {
    shallow(<LogoBox />);
  })
});
