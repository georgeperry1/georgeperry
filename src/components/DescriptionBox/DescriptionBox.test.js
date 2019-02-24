import React from 'react';
import { shallow } from 'enzyme';
import DescriptionBox from './DescriptionBox';

describe('DescriptionBox Component', () => {
  test('renders without crashing', () => {
    shallow(<DescriptionBox />);
  })
});
