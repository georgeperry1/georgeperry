

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GifPlayer from 'react-gif-player';
import anime from 'animejs';

import { 
  StyledTechnologies, 
  TechnologyBar, 
  TechnologyItem, 
  TechnologyGifItem, 
} from './Technologies.styled';

class Technologies extends Component {
  static defaultProps = {};

  static propTypes = {};

  componentDidMount() {
    const technologyTimeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 500,
      autoplay: false,
    });

    technologyTimeline.add({
      targets: '.technology-item-1',
      translateY: -300,
      delay: anime.stagger(100),
    });

    technologyTimeline.add({
      targets: '.technology-item-2',
      translateY: -300,
      delay: anime.stagger(100),
    });

    technologyTimeline.add({
      targets: '.technology-item-3',
      translateY: -300,
      delay: anime.stagger(100),
    });

    technologyTimeline.add({
      targets: '.technology-item-4',
      translateY: -300,
      delay: anime.stagger(100),
    });

    document.querySelector('.technology-item-1').onclick = technologyTimeline.play;
    // if (!!this.props.entered) {
    //   technologyTimeline.play();
    // };
  }

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.entered) {
      const item = document.querySelector('.technology-item-1');
      console.log('Item:', item.onclick);
      
      item.onclick();
    }
  }

  render() {
    return (
      <StyledTechnologies>
        <TechnologyBar>
          <TechnologyItem className="technology-item-1" src="../../assets/react-logo-png-transparent.png"/>
          <TechnologyItem className="technology-item-1" src="../../assets/logo-javascript.svg"/>
          <TechnologyItem className="technology-item-1" src="../../assets/redux.svg"/>         
          <TechnologyItem className="technology-item-1" src="../../assets/html-5.svg"/>
          <TechnologyItem className="technology-item-1" src="../../assets/css3.svg"/>
          <TechnologyItem className="technology-item-1" src="../../assets/nodejs-1.svg"/>
          <TechnologyItem className="technology-item-1" src="../../assets/express-109.svg"/>
        </TechnologyBar>
        <TechnologyBar>
          <TechnologyItem className="technology-item-2" src="../../assets/git-icon.svg"/>
          <TechnologyItem className="technology-item-2" src="../../assets/github-icon-1.svg"/>
          <TechnologyItem className="technology-item-2" src="../../assets/mongodb.svg"/>
          <TechnologyItem className="technology-item-2" src="../../assets/mysql.svg"/>
          <TechnologyItem className="technology-item-2" src="../../assets/postgresql.svg"/>
          <TechnologyItem className="technology-item-2" src="../../assets/sass-1.svg"/>
          <TechnologyItem className="technology-item-2" src="../../assets/webpack-icon.svg"/>
        </TechnologyBar>
        <TechnologyBar>
          <TechnologyItem className="technology-item-3" src="../../assets/amazon-echo.svg"/>
          <TechnologyItem className="technology-item-3" src="../../assets/amazon-web-services-2.svg"/>
          <TechnologyItem className="technology-item-3" src="../../assets/circleci.svg"/>
          <TechnologyItem className="technology-item-3" src="../../assets/visual-studio-code.svg"/>
          <TechnologyItem className="technology-item-3" src="../../assets/styled-components-new.png"/>
          <TechnologyItem className="technology-item-3" src="../../assets/storybook.png"/>
          <TechnologyGifItem className="technology-item-3" gif="../../assets/animejs-v3-logo-animation.gif" autoplay/>
        </TechnologyBar>
        <TechnologyBar>
          <TechnologyItem className="technology-item-4" src="../../assets/docker.svg"/>
          <TechnologyItem className="technology-item-4" src="../../assets/eslint-1.svg"/>
          <TechnologyItem className="technology-item-4" src="../../assets/firebase-1.svg"/>
          <TechnologyItem className="technology-item-4" src="../../assets/graphql.svg"/>
          <TechnologyItem className="technology-item-4" src="../../assets/heroku.svg"/>
          <TechnologyItem className="technology-item-4" src="../../assets/trello.svg"/>
          <TechnologyItem className="technology-item-4" src="../../assets/gulp.svg"/>
        </TechnologyBar>
      </StyledTechnologies>
    );
  }
}

export default Technologies;
