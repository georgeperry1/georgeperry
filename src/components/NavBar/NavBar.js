

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { 
  StyledNavBar,
  Menu,
  SendMessageButton,
} from './NavBar.styled';

class NavBar extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <StyledNavBar>
        <Menu/>
        <SendMessageButton>Say Hello</SendMessageButton>
      </StyledNavBar>
    );
  }
}

export default NavBar;
