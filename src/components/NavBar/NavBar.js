import React, { Component } from 'react';

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
        <SendMessageButton href="#findme" offset='0'>Say Hello</SendMessageButton>
      </StyledNavBar>
    );
  }
}

export default NavBar;
