import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import anime from 'animejs';

import { 
    StyledProjects,
    YellowProjectBox,
    WhiteProjectBox,
    ProjectContents,
    MobileContainer,
    DialectMobileOne,
    DialectMobileTwo,
    TracstackMobile,
} from './Projects.styled';
import OrbitMacBook from '../OrbitMacBook';
import LogoBox from '../LogoBox';
import DescriptionBox from '../DescriptionBox';

const orbitLogos = [
  '../../assets/react-vector.png',
  '../../assets/redux.svg',
  '../../assets/d3.png',
  '../../assets/vxjs.png',
  '../../assets/koajs.png',
  '../../assets/mongodb.svg',
];
const orbitProjectName = 'Orbit';
const orbitProjectDescription 
  = 'Orbit is an open-source data visualisation tool that allows businesses, sports teams and educational institutions track, measure and improve performance. Built using cutting-edge technologies, Orbit provides a birds-eye-view on performance metrics in a way that is easy to understand and digest.';

const dialectLogos = [
  '../../assets/witai.png',
  '../../assets/dialogflow.png',
  '../../assets/chatfuel.png',
  '../../assets/fbmessenger.png',
  '../../assets/nodejs-1.svg',
  '../../assets/express-109.svg',
];
const dialectProjectName = 'Dialect.ai';
const dialectProjectDescription = 'Dialect is a Denver-based start-up that designs and builds chatbots for musicians, events and businesses in the entertainment industry. During my time at Dialect, I designed and built a number of chatbots for customer service, sales and marketing, which were distributed via Facebook Messenger.';

const trackstackLogos = [
  '../../assets/react-vector.png',
  '../../assets/nodejs-1.svg',
  '../../assets/firebase-1.svg',
  '../../assets/express-109.svg',
  '../../assets/beatport.png',
  '../../assets/mysql.svg',
];
const trackstackProjectName = 'Trackstack';
const trackstackProjectDescription = "Trackstack makes music discovery for DJs simpler and more productive. A mobile crate-digging app that helps DJs discover new and unheard tracks, organise their playlists, and share music with their colleagues, fans and friends.";

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
            <YellowProjectBox>
              <ProjectContents>
                <OrbitMacBook />
                <LogoBox logos={orbitLogos} />
                <DescriptionBox projectName={orbitProjectName} projectDescription={orbitProjectDescription} />
              </ProjectContents>
            </YellowProjectBox>
            <WhiteProjectBox>
              <ProjectContents>
                <DescriptionBox projectName={dialectProjectName} projectDescription={dialectProjectDescription} />
                <LogoBox logos={dialectLogos} />
                <MobileContainer>
                  <DialectMobileOne src="../../assets/dialect1.jpg" />
                  <DialectMobileTwo src="../../assets/dialect2.jpg" />
                </MobileContainer>
              </ProjectContents>
            </WhiteProjectBox>
            <YellowProjectBox>
              <ProjectContents>
                <TracstackMobile src="../../assets/newtrackstack.png" />
                <LogoBox logos={trackstackLogos} />
                <DescriptionBox projectName={trackstackProjectName} projectDescription={trackstackProjectDescription} />
              </ProjectContents>
            </YellowProjectBox>
        </StyledProjects>
      );
    }
  }
  
  export default Projects;
  