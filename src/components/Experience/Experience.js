import React, { Component } from 'react';
import anime from 'animejs';

import { 
    StyledExperience,
    ExperienceHeading,
    TimelineBox,
    CompanyBox,
    CompanyLogo,
    CompanyName,
    Timeline,
    DateBox,
    DateContainer,
    DateItem,
    Offshoot,
    OffshootBox,
} from './Experience.styled';

class Experience extends Component {
  
  componentDidMount() {
    if (window.screen.width >= 1200) {
      anime({
        targets: '.company-logo',
        rotateY: 360,
        delay: 0,
        easing: 'linear',
        duration: 4000,
        loop: true,
      }); 
    }
  }

  render() {
    return (
      <StyledExperience>
        <section id='experience'></section>
        <ExperienceHeading>Experience & Projects</ExperienceHeading>
        <TimelineBox>
            <CompanyBox>
                <CompanyLogo className="company-logo">
                    <img src="../../assets/TrackstackLogo.png" alt="Trackstack" />
                </CompanyLogo>
                <CompanyLogo className="company-logo">
                    <img src="../../assets/more2-logo.png" alt="More2" />
                </CompanyLogo>
                <CompanyLogo className="company-logo">
                    <img src="../../assets/dialectlogo.png" alt="Dialect.ai" />
                </CompanyLogo>
                <CompanyLogo className="company-logo">
                    <img src="../../assets/mv-logo.png" alt="Model Village" />
                </CompanyLogo>
            </CompanyBox>
            <OffshootBox>
                <Offshoot />
                <Offshoot />
                <Offshoot />
                <Offshoot />
            </OffshootBox>
            <Timeline />
        </TimelineBox>
        <DateBox>
          <DateContainer>
            <CompanyName>Trackstack</CompanyName>
            <DateItem>2015 - 2016</DateItem>
          </DateContainer>
          <DateContainer>
            <CompanyName>More2</CompanyName>
            <DateItem>2016 - 2017</DateItem>
          </DateContainer>
          <DateContainer>
            <CompanyName>Dialect.ai</CompanyName>
            <DateItem>2016 - 2017</DateItem>
          </DateContainer>
          <DateContainer>
            <CompanyName>Model Village</CompanyName>
            <DateItem>2018 - Present</DateItem>
          </DateContainer>  
        </DateBox>
      </StyledExperience>
    );
  }
}

export default Experience;
