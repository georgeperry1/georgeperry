

import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { StyledLanding, LandingTextContainer } from './Landing.styled';
import LandingText from '../LandingText';
import LandingSpecialities from '../LandingSpecialities';
import NavBar from '../NavBar';

class Landing extends Component {
  static defaultProps = {};

  static propTypes = {};

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
    <StyledLanding>
      <NavBar />
      <section id='overview'></section>
      <LandingTextContainer>
        <LandingText>Hey, I'm George Perry,</LandingText>
        <LandingText startDelay={3000}>I'm a Fullstack Software Developer and I build stuff with</LandingText>
        <LandingSpecialities />
      </LandingTextContainer>
    </StyledLanding>
    );
  }
}

export default Landing;