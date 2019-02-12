

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledLanding, LandingTextContainer } from './Landing.styled';
import LandingText from '../LandingText';
import LandingSpecialities from '../LandingSpecialities';

class Landing extends Component {
  static defaultProps = {};

  static propTypes = {};

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
    <StyledLanding>
      <LandingTextContainer>
        <LandingText>Hey, I'm George Perry,</LandingText>
        <LandingText startDelay={2000}>I'm a Fullstack Software Developer and I build stuff with</LandingText>
        <LandingSpecialities />
      </LandingTextContainer>
    </StyledLanding>
    );
  }
}

export default Landing;
