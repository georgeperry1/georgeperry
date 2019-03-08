import React, { Component } from 'react';
import anime from 'animejs';
import { googleEvent } from '../../config';

import { 
    StyledWriting,
    WritingHeading,
    Article,
    ThumbnailContainer,
    Thumbnail,
    ThumbnailStatBox,
    StatBox,
    Stat,
    StatLabel,
    ArticleDetails,
    ArticleTitle,
    ReadMe,
} from './Writing.styled';

  class Writing extends Component {
    componentDidMount() {
        const thumbnailTimeline = anime.timeline({
            easing: 'easeOutExpo',
            autoplay: false,
            loop: false,
        });

        thumbnailTimeline.add({
            targets: '.thumbnail-7',
            translateX: 270,
            delay: anime.stagger(100),
          });

        thumbnailTimeline.add({
            targets: '.article-7',
            translateX: -270,
            // delay: anime.stagger(0),
        });

        thumbnailTimeline.add({
            targets: '.thumbnail-6',
            translateX: 270,
            delay: anime.stagger(100),
        }, 500);

        thumbnailTimeline.add({
            targets: '.article-6',
            translateX: -270,
            delay: anime.stagger(100),
        }, 500);
    
        thumbnailTimeline.add({
            targets: '.thumbnail-5',
            translateX: 270,
            delay: anime.stagger(100),
        }, 1000);

        thumbnailTimeline.add({
            targets: '.article-5',
            translateX: -270,
            delay: anime.stagger(100),
        }, 1000);
    
        thumbnailTimeline.add({
            targets: '.thumbnail-4',
            translateX: 270,
            delay: anime.stagger(100),
        }, 1500);

        thumbnailTimeline.add({
            targets: '.article-4',
            translateX: -270,
            delay: anime.stagger(100),
        }, 1500);

        thumbnailTimeline.add({
            targets: '.thumbnail-3',
            translateX: 270,
            delay: anime.stagger(100),
        }, 2000);

        thumbnailTimeline.add({
            targets: '.article-3',
            translateX: -270,
            delay: anime.stagger(100),
        }, 2000);
    
        thumbnailTimeline.add({
            targets: '.thumbnail-2',
            translateX: 270,
            delay: anime.stagger(100),
        }, 2500);

        thumbnailTimeline.add({
            targets: '.article-2',
            translateX: -270,
            delay: anime.stagger(100),
        }, 2500);
    
        thumbnailTimeline.add({
            targets: '.thumbnail-1',
            translateX: 270,
            delay: anime.stagger(100),
        }, 3000);

        thumbnailTimeline.add({
            targets: '.article-1',
            translateX: -270,
            delay: anime.stagger(100),
        }, 3000);

        document.querySelector('.thumbnail-7').onfullscreenchange = thumbnailTimeline.play;
    };

    componentWillReceiveProps(nextProps) {
        if (!!nextProps.entered && nextProps.enterCount === 1 && window.screen.width > 1200) {
          const item = document.querySelector('.thumbnail-7');      
          item.onfullscreenchange();
        }
      }


    render() {
      return (
        <StyledWriting className="thumbnail-container">
            <section id='writing'></section>
           <WritingHeading>Writing</WritingHeading>
           <Article>
                <ThumbnailContainer className="thumbnail thumbnail-7">
                    <Thumbnail src="../../assets/voicewar.png" />
                    <ThumbnailStatBox>
                        <StatBox>
                            <Stat>1.6k</Stat>
                            <StatLabel>Reads</StatLabel>
                        </StatBox>
                        <StatBox>
                            <Stat>110</Stat>
                            <StatLabel>Claps</StatLabel>
                        </StatBox>
                    </ThumbnailStatBox>
                </ThumbnailContainer>
                <ArticleDetails className="article-7">
                    <ArticleTitle>Who will in the Voice War?</ArticleTitle>
                    <ReadMe href="https://medium.com/@GeorgePerry/who-will-win-the-voice-war-a19510b4965b" target="_blank" onClick={e => googleEvent('Writing', 'Click', 'Voice War')}>Read Me</ReadMe>
                </ArticleDetails>
           </Article>
           <Article>
                <ThumbnailContainer className="thumbnail thumbnail-6">
                    <Thumbnail src="../../assets/intro.jpeg" />
                    <ThumbnailStatBox>
                        <StatBox>
                            <Stat>1.1k</Stat>
                            <StatLabel>Reads</StatLabel>
                        </StatBox>
                        <StatBox>
                            <Stat>57</Stat>
                            <StatLabel>Claps</StatLabel>
                        </StatBox>
                    </ThumbnailStatBox>
                </ThumbnailContainer>
                <ArticleDetails className="article-6">
                    <ArticleTitle>Bootcamp Series: Introduction</ArticleTitle>
                    <ReadMe href="https://medium.com/code-words/bootcamp-series-introduction-b4b28d375260" target="_blank" onClick={e => googleEvent('Writing', 'Click', 'Bootcamp Into')}>Read Me</ReadMe>
                </ArticleDetails>
           </Article>
           <Article>
                <ThumbnailContainer className="thumbnail thumbnail-5">
                    <Thumbnail src="../../assets/why.jpeg" />
                    <ThumbnailStatBox>
                        <StatBox>
                            <Stat>946</Stat>
                            <StatLabel>Reads</StatLabel>
                        </StatBox>
                        <StatBox>
                            <Stat>32</Stat>
                            <StatLabel>Claps</StatLabel>
                        </StatBox>
                    </ThumbnailStatBox>
                </ThumbnailContainer>
                <ArticleDetails className="article-5">
                    <ArticleTitle>Bootcamp Series Part One: Why choose a Coding Bootcamp?</ArticleTitle>
                    <ReadMe href="https://medium.com/code-words/bootcamp-series-why-choose-a-coding-bootcamp-c4315688a8d8" target="_blank" onClick={e => googleEvent('Writing', 'Click', 'Bootcamp Part One')}>Read Me</ReadMe>
                </ArticleDetails>
           </Article>
           <Article>
                <ThumbnailContainer className="thumbnail thumbnail-4">
                    <Thumbnail src="../../assets/part1.jpeg" />
                    <ThumbnailStatBox>
                        <StatBox>
                            <Stat>1k</Stat>
                            <StatLabel>Reads</StatLabel>
                        </StatBox>
                        <StatBox>
                            <Stat>51</Stat>
                            <StatLabel>Claps</StatLabel>
                        </StatBox>
                    </ThumbnailStatBox>
                </ThumbnailContainer>
                <ArticleDetails className="article-4">
                    <ArticleTitle>Bootcamp Series Part Two: How To Choose The Right Coding Bootcamp</ArticleTitle>
                    <ReadMe href="https://medium.com/code-words/bootcamp-series-how-to-choose-the-right-coding-bootcamp-ff207dcf9f86" target="_blank" onClick={e => googleEvent('Writing', 'Click', 'Bootcamp Part Two')}>Read Me</ReadMe>
                </ArticleDetails>
           </Article>
           <Article>
                <ThumbnailContainer className="thumbnail thumbnail-3">
                    <Thumbnail src="../../assets/part2.jpeg" />
                    <ThumbnailStatBox>
                        <StatBox>
                            <Stat>1.2k</Stat>
                            <StatLabel>Reads</StatLabel>
                        </StatBox>
                        <StatBox>
                            <Stat>111</Stat>
                            <StatLabel>Claps</StatLabel>
                        </StatBox>
                    </ThumbnailStatBox>
                </ThumbnailContainer>
                <ArticleDetails className="article-3">
                    <ArticleTitle>Bootcamp Series Part Three: How to Prepare for your Coding Bootcamp</ArticleTitle>
                    <ReadMe href="https://medium.com/code-words/bootcamp-series-how-to-prepare-for-your-coding-bootcamp-f4293fbbf4a5" target="_blank" onClick={e => googleEvent('Writing', 'Click', 'Bootcamp Part Three')}>Read Me</ReadMe>
                </ArticleDetails>
           </Article>
           <Article>
                <ThumbnailContainer className="thumbnail thumbnail-2">
                    <Thumbnail src="../../assets/part3crop.png" />
                    <ThumbnailStatBox>
                        <StatBox>
                            <Stat>562</Stat>
                            <StatLabel>Reads</StatLabel>
                        </StatBox>
                        <StatBox>
                            <Stat>9</Stat>
                            <StatLabel>Claps</StatLabel>
                        </StatBox>
                    </ThumbnailStatBox>
                </ThumbnailContainer>
                <ArticleDetails className="article-2">
                    <ArticleTitle>Bootcamp Series Part Four: Managing Your Time, Mind and Health During Your Coding Bootcamp</ArticleTitle>
                    <ReadMe href="https://medium.com/code-words/bootcamp-series-managing-your-time-mind-and-health-during-your-coding-bootcamp-8db29f6237e" target="_blank" onClick={e => googleEvent('Writing', 'Click', 'Bootcamp Part Four')}>Read Me</ReadMe>
                </ArticleDetails>
           </Article>
           <Article>
                <ThumbnailContainer className="thumbnail thumbnail-1">
                    <Thumbnail src="../../assets/cbnews.png" />
                    <ThumbnailStatBox>
                        <StatBox>
                            <Stat>2.8k</Stat>
                            <StatLabel>Reads</StatLabel>
                        </StatBox>
                        <StatBox>
                            <Stat>18</Stat>
                            <StatLabel>Claps</StatLabel>
                        </StatBox>
                    </ThumbnailStatBox>
                </ThumbnailContainer>
                <ArticleDetails className="article-1">
                    <ArticleTitle>How we changed our recruitment process using a Chatbot</ArticleTitle>
                    <ReadMe href="https://chatbotnewsdaily.com/how-we-changed-our-recruitment-process-using-a-chatbot-b030b9820c1d" target="_blank" onClick={e => googleEvent('Writing', 'Click', 'Chatbot')}>Read Me</ReadMe>
                </ArticleDetails>
           </Article>
        </StyledWriting>
      );
    }
  }
  
  export default Writing;
