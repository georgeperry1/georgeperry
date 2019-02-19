import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import anime from 'animejs';

import { 
    StyledExperience,
    ExperienceHeading,
    TimelineBox,
    CompanyBox,
    CompanyLogo,
    Timeline,
    DateBox,
    DateItem,
    Offshoot,
    OffshootBox,
} from './Experience.styled';

class Experience extends Component {
  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    anime({
      targets: '.company-logo',
      rotateY: 360,
      delay: 0,
      easing: 'linear',
      duration: 4000,
      loop: true,
    });
  }

  render() {
    return (
      <StyledExperience>
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
            <DateBox>
                <DateItem>2015</DateItem>
                <DateItem>2016</DateItem>
                <DateItem>2017</DateItem>
                <DateItem>2018</DateItem>
            </DateBox>
            <OffshootBox>
                <Offshoot />
                <Offshoot />
                <Offshoot />
                <Offshoot />
            </OffshootBox>
            <Timeline />
        </TimelineBox>
      </StyledExperience>
    );
  }
}

export default Experience;
