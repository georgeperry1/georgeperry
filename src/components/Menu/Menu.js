

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledMenu, MenuItem, StyledMenuWrapper } from './Menu.styled';
class Menu extends Component {
  static defaultProps = {
    isOpen: false,
  };

  static propTypes = {
    isOpen: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      color: '#FBB018',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = () => {    
    if (window.scrollY < 2350) {
      this.setState({ color: '#FBB018' });
    } 
    
    if (window.scrollY > 2351 && window.scrollY < 2900) {
      this.setState({ color: '#2C3243' });
    } 
    
    if (window.scrollY > 2901 && window.screenY < 3450) {
      this.setState({ color: '#FBB018' });
    }

    if (window.scrollY > 3451) {
      this.setState({ color: '#2C3243' });
    }
  }
  

  handleMenuStyle = () => {    
    return {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '50px',
        top: '36px'
      },
      bmBurgerBars: {
        background: `${this.state.color}`,
      },
      bmBurgerBarsHover: {
        background: '#a90000',
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
  };

  render() {
    const { isOpen } = this.props;
    return (
      <StyledMenu>
        <StyledMenuWrapper isOpen={isOpen} styles={this.handleMenuStyle()}>
          <MenuItem href="#overview" offset='600'>Overview</MenuItem>
          <MenuItem href="#technologies" offset='100'>Technologies</MenuItem>
          <MenuItem href="#experience" offset='100'>Experience & Projects</MenuItem>
          <MenuItem href="#writing" offset='50'>Writing</MenuItem>
          <MenuItem href="#findme" offset='100'>Find Me</MenuItem>
          <MenuItem href="#hello" offset='100'>Say Hello</MenuItem>
        </StyledMenuWrapper>
      </StyledMenu>
    );
  }
}

export default Menu;
