import React, { Component } from 'react';
// import PropTypes from 'prop-types';

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

  render() {
    return (
      <StyledExperience>
        <ExperienceHeading>Experience & Projects</ExperienceHeading>
        <TimelineBox>
            <CompanyBox>
                <CompanyLogo>
                    <img src="../../assets/TrackstackLogo.png" alt="Trackstack" />
                </CompanyLogo>
                <CompanyLogo>
                    <img src="../../assets/more2-logo.png" alt="More2" />
                </CompanyLogo>
                <CompanyLogo>
                    <img src="../../assets/dialectlogo.png" alt="Dialect.ai" />
                </CompanyLogo>
                <CompanyLogo>
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
