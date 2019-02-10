

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typing from 'react-typing-animation';

import { StyledLandingText } from './LandingText.styled';

class LandingText extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    const { startDelay } = this.props;
  	return (
      <Typing startDelay={startDelay}>
        <StyledLandingText>
          {this.props.children}
        </StyledLandingText>
      </Typing>
    );
  }
}

export default LandingText;
