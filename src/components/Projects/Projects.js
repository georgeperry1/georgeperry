import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import anime from 'animejs';

import { 
    StyledProjects,
    ProjectBox,
    Screenshot,
    ScreenBackground,
    MacBook,
    DescriptionBox,
    DescriptionHeading,
    DescriptionText,
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
            <ProjectBox>
              <Screenshot src="../../assets/snapshot.png" alt="orbit" />
              <MacBook src="../../assets/mockup.png" alt="Macbook" />
              <ScreenBackground />
              <DescriptionBox>
                <DescriptionHeading>Orbit</DescriptionHeading>
                <DescriptionText>Orbit is a data analytics projects</DescriptionText>
              </DescriptionBox>
            </ProjectBox>
        </StyledProjects>
      );
    }
  }
  
  export default Projects;
  