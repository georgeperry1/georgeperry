

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

import { 
  StyledTechnologies,
  TechnologiesHeading,
  TechnologyContainer,
  TechnologyBar, 
  TechnologyItem, 
  TechnologyName,
  TechnologyItemContainer,
} from './Technologies.styled';

class Technologies extends Component {
  static defaultProps = {
    entered: false,
    enterCount: 0,
  };

  static propTypes = {
    entered: PropTypes.bool,
    enterCount: PropTypes.num,
  };

  constructor(props) {
    super(props);
    this.state = {
      mobile: false,
    };
  }

  componentDidMount() {
    console.log('Screen:', window.screen.width);
    
    if (window.screen.width < 1200) {
      this.setState({ mobile: true });
    }

    const technologyTimeline = anime.timeline({
      easing: 'easeOutExpo',
      autoplay: false,
      loop: false,
    });

    technologyTimeline.add({
      targets: '.technology-container-1',
      translateY: -300,
      delay: anime.stagger(100),
    });

    technologyTimeline.add({
      targets: '.technology-container-2',
      translateY: -300,
      delay: anime.stagger(100),
    }, 500);

    technologyTimeline.add({
      targets: '.technology-container-3',
      translateY: -300,
      delay: anime.stagger(100),
    }, 1000);

    technologyTimeline.add({
      targets: '.technology-container-4',
      translateY: -300,
      delay: anime.stagger(100),
    }, 1500);

    document.querySelector('.technology-container-1').onfullscreenchange = technologyTimeline.play;

    const firstRow = document.querySelectorAll('.technology-container-1');
    const secondRow = document.querySelectorAll('.technology-container-2');
    const thirdRow = document.querySelectorAll('.technology-container-3');
    const fourthRow = document.querySelectorAll('.technology-container-4');

    const firstItems = Array.from(firstRow);
    const secondItems = Array.from(secondRow);
    const thirdItems = Array.from(thirdRow);
    const fourthItems = Array.from(fourthRow);

    const items = [...firstItems, ...secondItems, ...thirdItems, ...fourthItems];
    let playing = false;

    items.map(item => { //eslint-disable-line array-callback-return
      item.addEventListener('click', () => {
        if (!!playing)
          return;
        
          playing = true;
  
        anime({
          targets: item,
          scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
          rotateY: {value: '+=180', delay: 200},
          easing: 'easeInOutSine',
          duration: 400,
          complete: () => {
            playing = false;
          },
        });
      });
      item.addEventListener('click', () => {
        if (!!playing)
          return;
        
          playing = true;
  
        anime({
          targets: item,
          scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
          rotateY: {value: '+=180', delay: 200},
          easing: 'easeInOutSine',
          duration: 400,
          complete: () => {
            playing = false;
          },
        });

      });
    });
    
  }

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.entered && nextProps.enterCount === 1 && window.screen.width >= 1200) {
      const item = document.querySelector('.technology-container-1');      
      item.onfullscreenchange();
    }
  }

  render() {
    const { mobile } = this.state;

    return (
      <StyledTechnologies>
        <section id='technologies'></section>
        <TechnologiesHeading>Technologies</TechnologiesHeading>
        <TechnologyContainer>
          <TechnologyBar>
            <TechnologyItemContainer className="technology-container-1" mobile={mobile} >
              <TechnologyItem className="technology-item-1" src="../../assets/logo-javascript.svg"/>
              <TechnologyName>JavaScript</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-1" mobile={mobile} >
              <TechnologyItem className="technology-item-1" src="../../assets/react.svg"/>
              <TechnologyName>React</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-1" mobile={mobile} >
              <TechnologyItem className="technology-item-1" src="../../assets/redux.svg"/>         
              <TechnologyName>Redux</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-1" mobile={mobile} >
              <TechnologyItem className="technology-item-1" src="../../assets/html-5.svg"/>
              <TechnologyName>HTML5</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-1" mobile={mobile} >
              <TechnologyItem className="technology-item-1" src="../../assets/css3.svg"/>
              <TechnologyName>CSS3</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-1" mobile={mobile} >
              <TechnologyItem className="technology-item-1" src="../../assets/nodejs-1.svg"/>
              <TechnologyName>Node JS</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-1" mobile={mobile} >
              <TechnologyItem className="technology-item-1" src="../../assets/express-109.svg"/>
              <TechnologyName>Express</TechnologyName>
            </TechnologyItemContainer>
          </TechnologyBar>
          <TechnologyBar>
            <TechnologyItemContainer className="technology-container-2" mobile={mobile} >  
              <TechnologyItem className="technology-item-2" src="../../assets/git-icon.svg"/>
              <TechnologyName>Git</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-2" mobile={mobile} >
              <TechnologyItem className="technology-item-2" src="../../assets/github-icon-1.svg"/>
              <TechnologyName>GitHub</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-2" mobile={mobile} >
              <TechnologyItem className="technology-item-2" src="../../assets/mongodb.svg"/>
              <TechnologyName>MongoDB</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-2" mobile={mobile} >
              <TechnologyItem className="technology-item-2" src="../../assets/mysql.svg"/>
              <TechnologyName>MySQL</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-2" mobile={mobile} >
              <TechnologyItem className="technology-item-2" src="../../assets/postgresql.svg"/>
              <TechnologyName>PostgreSQL</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-2" mobile={mobile} >
              <TechnologyItem className="technology-item-2" src="../../assets/sass-1.svg"/>
              <TechnologyName>SASS</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-2" mobile={mobile} >
              <TechnologyItem className="technology-item-2" src="../../assets/webpack-icon.svg"/>
              <TechnologyName>Webpack</TechnologyName>
            </TechnologyItemContainer>
          </TechnologyBar>
          <TechnologyBar>
            <TechnologyItemContainer className="technology-container-3" mobile={mobile} >
              <TechnologyItem className="technology-item-3" src="../../assets/amazon-echo.svg"/>
              <TechnologyName>Amazon Echo</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-3" mobile={mobile} >
              <TechnologyItem className="technology-item-3" src="../../assets/amazon-web-services-2.svg"/>
              <TechnologyName>AWS</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-3" mobile={mobile} >
              <TechnologyItem className="technology-item-3" src="../../assets/circleci.svg"/>
              <TechnologyName>CircleCI</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-3" mobile={mobile} >
              <TechnologyItem className="technology-item-3" src="../../assets/visual-studio-code.svg"/>
              <TechnologyName>VSCode</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-3" mobile={mobile} >
              <TechnologyItem className="technology-item-3" src="../../assets/styled-components-new.png"/>
              <TechnologyName>Styled Components</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-3" mobile={mobile} >
              <TechnologyItem className="technology-item-3" src="../../assets/storybook.png"/>
              <TechnologyName>Storybook</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-3" mobile={mobile} >
              <TechnologyItem 
                className="technology-item-3" 
                  src="../../assets/animejs.png" 
                  style={{ 
                    width: '120px', 
                    height: '50px',
                    position: 'relative',
                    top: '15px',
                    left: '-20px',
                  }}            
                />
              <TechnologyName>Anime.js</TechnologyName>
            </TechnologyItemContainer>
          </TechnologyBar>
          <TechnologyBar>
            <TechnologyItemContainer className="technology-container-4" mobile={mobile} >
              <TechnologyItem className="technology-item-4" src="../../assets/docker.svg"/>
              <TechnologyName>Docker</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-4" mobile={mobile} >
              <TechnologyItem className="technology-item-4" src="../../assets/eslint-1.svg"/>
              <TechnologyName>ESLint</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-4" mobile={mobile} >
              <TechnologyItem className="technology-item-4" src="../../assets/firebase-1.svg"/>
              <TechnologyName>Firebase</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-4" mobile={mobile} >
              <TechnologyItem className="technology-item-4" src="../../assets/graphql.svg"/>
              <TechnologyName>GraphQL</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-4" mobile={mobile} >
              <TechnologyItem className="technology-item-4" src="../../assets/heroku.svg"/>
              <TechnologyName>Heroku</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-4" mobile={mobile} >
              <TechnologyItem className="technology-item-4" src="../../assets/trello.svg"/>
              <TechnologyName>Trello</TechnologyName>
            </TechnologyItemContainer>
            <TechnologyItemContainer className="technology-container-4" mobile={mobile} >
              <TechnologyItem className="technology-item-4" src="../../assets/gulp.svg"/>
              <TechnologyName>Gulp</TechnologyName>
            </TechnologyItemContainer>
          </TechnologyBar>
        </TechnologyContainer>
      </StyledTechnologies>
    );
  }
}

export default Technologies;
