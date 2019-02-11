

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { stack as MenuWrapper } from 'react-burger-menu';

import { StyledMenu, MenuItem } from './Menu.styled';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '50px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47',
    transition: 'all 280ms ease-in-out',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
    transition: 'all 280ms ease-in-out',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    outline: 'none',
  },
  bmCross: {
    background: '#bdc3c7',
    outline: 'none',
  },
  bmMenuWrap: {
    position: 'fixed',
    overflow: 'hidden',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    overflow: 'hidden',
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class Menu extends Component {
  static defaultProps = {
    isOpen: false,
  };

  static propTypes = {
    isOpen: PropTypes.bool,
  };

  render() {
    const { isOpen } = this.props;
    return (
      <StyledMenu>
        <MenuWrapper isOpen={isOpen} styles={styles}>
          <MenuItem href="#">Overview</MenuItem>
          <MenuItem href="#">Technologies</MenuItem>
          <MenuItem href="#">Experience & Projects</MenuItem>
          <MenuItem href="#">Say Hello</MenuItem>
        </MenuWrapper>
      </StyledMenu>
    );
  }
}

export default Menu;
