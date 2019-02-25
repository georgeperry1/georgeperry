import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import anime from 'animejs';

import { 
    StyledWriting,
    WritingHeading,
    Article,
    Thumbnail,
    ArticleDetails,
    ArticleTitle,
    ReadMe,
} from './Writing.styled';

  class Writing extends Component {
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
        <StyledWriting>
           <WritingHeading>Writing</WritingHeading>
           <Article>
                <Thumbnail src="../../assets/voicewar.png" />
                <ArticleDetails>
                    <ArticleTitle>Who will in the Voice War?</ArticleTitle>
                    <ReadMe href="https://medium.com/@GeorgePerry/who-will-win-the-voice-war-a19510b4965b" target="_blank">Read Me</ReadMe>
                </ArticleDetails>
           </Article>
           <Article>
                <Thumbnail src="../../assets/intro.jpeg" />
                <ArticleDetails>
                    <ArticleTitle>Bootcamp Series: Introduction</ArticleTitle>
                    <ReadMe href="https://medium.com/code-words/bootcamp-series-introduction-b4b28d375260" target="_blank">Read Me</ReadMe>
                </ArticleDetails>
           </Article>
           <Article>
                <Thumbnail src="../../assets/why.jpeg" />
                <ArticleDetails>
                    <ArticleTitle>Bootcamp Series Part One: Why choose a Coding Bootcamp?</ArticleTitle>
                    <ReadMe href="https://medium.com/code-words/bootcamp-series-why-choose-a-coding-bootcamp-c4315688a8d8" target="_blank">Read Me</ReadMe>
                </ArticleDetails>
           </Article>
           <Article>
                <Thumbnail src="../../assets/part1.jpeg" />
                <ArticleDetails>
                    <ArticleTitle>Bootcamp Series Part Two: How To Choose The Right Coding Bootcamp</ArticleTitle>
                    <ReadMe href="https://medium.com/code-words/bootcamp-series-how-to-choose-the-right-coding-bootcamp-ff207dcf9f86" target="_blank">Read Me</ReadMe>
                </ArticleDetails>
           </Article>
           <Article>
                <Thumbnail src="../../assets/part2.jpeg" />
                <ArticleDetails>
                    <ArticleTitle>Bootcamp Series Part Three: How to Prepare for your Coding Bootcamp</ArticleTitle>
                    <ReadMe href="https://medium.com/code-words/bootcamp-series-how-to-prepare-for-your-coding-bootcamp-f4293fbbf4a5" target="_blank">Read Me</ReadMe>
                </ArticleDetails>
           </Article>
           <Article>
                <Thumbnail src="../../assets/part3.jpeg" />
                <ArticleDetails>
                    <ArticleTitle>Bootcamp Series Part Four: Managing Your Time, Mind and Health During Your Coding Bootcamp</ArticleTitle>
                    <ReadMe href="https://medium.com/code-words/bootcamp-series-managing-your-time-mind-and-health-during-your-coding-bootcamp-8db29f6237e" target="_blank">Read Me</ReadMe>
                </ArticleDetails>
           </Article>
           <Article>
                <Thumbnail src="../../assets/chatbotnews.png" />
                <ArticleDetails>
                    <ArticleTitle>How we changed our recruitment process using a Chatbot</ArticleTitle>
                    <ReadMe href="https://chatbotnewsdaily.com/how-we-changed-our-recruitment-process-using-a-chatbot-b030b9820c1d" target="_blank">Read Me</ReadMe>
                </ArticleDetails>
           </Article>
        </StyledWriting>
      );
    }
  }
  
  export default Writing;
