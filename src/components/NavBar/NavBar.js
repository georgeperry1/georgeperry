

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { 
  StyledNavBar,
  Logo,
  SendMessageButton,
} from './NavBar.styled';

class NavBar extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <StyledNavBar>
        <Logo src={''}/>
        <SendMessageButton>Send me and message</SendMessageButton>
      </StyledNavBar>
    );
  }
}

export default NavBar;
