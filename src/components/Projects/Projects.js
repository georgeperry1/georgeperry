import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import anime from 'animejs';

import { 
    StyledProjects,
    ProjectBox,
} from './Projects.styled';

class Projects extends Component {
    static defaultProps = {};
  
    static propTypes = {};
  
    componentDidMount() {
    //   anime({
    //     targets: '.company-logo',
    //     rotateY: 360,
    //     delay: 0,
    //     easing: 'linear',
    //     duration: 4000,
    //     loop: true,
    //   });
    }
  
    render() {
      return (
        <StyledProjects>
            <ProjectBox>Orbit</ProjectBox>
            <ProjectBox>Trackstack</ProjectBox>
            <ProjectBox>Dialect.ai</ProjectBox>
        </StyledProjects>
      );
    }
  }
  
  export default Projects;
  