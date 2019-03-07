import React from 'react';
import { shallow } from 'enzyme';
import Writing from './Writing';

describe('Writing Component', () => {
  test('renders without crashing', () => {
    shallow(<Writing />);
  })
});
