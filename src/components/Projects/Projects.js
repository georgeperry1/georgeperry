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
    ProjectLogo,
    TechLogos,
    LogoBox,
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
              <Screenshot src="../../assets/snapshot.png" alt="Orbit" />
              <MacBook src="../../assets/mockup.png" alt="Macbook" />
              <ScreenBackground />
              <LogoBox>
                <TechLogos src="../../assets/react-vector.png" alt="React"/>
                <TechLogos src="../../assets/redux.svg" alt="Redux"/>
                <TechLogos src="../../assets/d3.png" alt="D3"/>
                <TechLogos src="../../assets/vxjs.png" alt="VX"/>
                <TechLogos src="../../assets/koajs.png" alt="Koa"/>
                <TechLogos src="../../assets/mongodb.svg" alt="MongoDB"/>
              </LogoBox>
              <DescriptionBox>
                <DescriptionHeading>Orbit</DescriptionHeading>
                <DescriptionText>
                  Orbit is an open-source data visualisation tool that allows businesses, sports teams and educational 
                  institutions track, measure and improve performance. Built using cutting-edge technologies, 
                  Orbit provides a birds-eye-view on performance metrics in a way that is easy to understand and digest.
                </DescriptionText>
              </DescriptionBox>
            </ProjectBox>
        </StyledProjects>
      );
    }
  }
  
  export default Projects;
  