

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GifPlayer from 'react-gif-player';

import { StyledTechnologies, TechnologyBar, TechnologyItem } from './Technologies.styled';

class Technologies extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <StyledTechnologies>
        <TechnologyBar>
          <TechnologyItem src="../../assets/react.svg"/>
          <TechnologyItem src="../../assets/logo-javascript.svg"/>
          <TechnologyItem src="../../assets/redux.svg"/>
          <TechnologyItem src="../../assets/html-5.svg"/>
          <TechnologyItem src="../../assets/css3.svg"/>
          <TechnologyItem src="../../assets/nodejs-1.svg"/>
          <TechnologyItem src="../../assets/express-109.svg"/>
        </TechnologyBar>
        <TechnologyBar>
          <TechnologyItem src="../../assets/git-icon.svg"/>
          <TechnologyItem src="../../assets/github-icon-1.svg"/>
          <TechnologyItem src="../../assets/mongodb.svg"/>
          <TechnologyItem src="../../assets/mysql.svg"/>
          <TechnologyItem src="../../assets/postgresql.svg"/>
          <TechnologyItem src="../../assets/sass-1.svg"/>
          <TechnologyItem src="../../assets/webpack-icon.svg"/>
        </TechnologyBar>
        <TechnologyBar>
          <TechnologyItem src="../../assets/amazon-echo.svg"/>
          <TechnologyItem src="../../assets/amazon-web-services-2.svg"/>
          <TechnologyItem src="../../assets/circleci.svg"/>
          <TechnologyItem src="../../assets/visual-studio-code.svg"/>
          <TechnologyItem src="../../assets/styled-components-new.png"/>
          <TechnologyItem src="../../assets/storybook.png"/>
          <GifPlayer gif="../../assets/animejs-v3-logo-animation.gif" style={{ width: '120px' }} autoplay/>
        </TechnologyBar>
      </StyledTechnologies>
    );
  }
}

export default Technologies;
