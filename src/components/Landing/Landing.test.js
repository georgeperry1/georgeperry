import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';

describe('Landing Component', () => {
  test('renders without crashing', () => {
    shallow(<Landing />);
  })
});
