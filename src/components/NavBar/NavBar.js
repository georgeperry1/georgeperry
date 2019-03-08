import React, { Component } from 'react';
import { googleEvent } from '../../config';

import { 
  StyledNavBar,
  SendMessageButton,
} from './NavBar.styled';
import Menu from '../Menu';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleOpen = e => {
    googleEvent('Menu', 'Click', 'Menu Item')
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <StyledNavBar>
        <Menu 
          isOpen={isOpen}
          onClick={this.handleOpen}
        />
        <SendMessageButton href="#findme" offset='0' onClick={e => googleEvent('Nav Bar', 'Click', 'Say Hello')}>Say Hello</SendMessageButton>
      </StyledNavBar>
    );
  }
}

export default NavBar;
