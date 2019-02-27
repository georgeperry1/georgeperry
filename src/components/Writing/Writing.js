import React, { Component } from 'react';
// import PropTypes from 'prop-types';

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
    render() {
      return (
        <StyledWriting>
            <section id='writing'></section>
           <WritingHeading>Writing</WritingHeading>
           <Article>
                <ThumbnailContainer>
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
                <ArticleDetails>
                    <ArticleTitle>Who will in the Voice War?</ArticleTitle>
                    <ReadMe href="https://medium.com/@GeorgePerry/who-will-win-the-voice-war-a19510b4965b" target="_blank">Read Me</ReadMe>
                </ArticleDetails>
           </Article>
           <Article>
                <ThumbnailContainer>
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
                <ArticleDetails>
                    <ArticleTitle>Bootcamp Series: Introduction</ArticleTitle>
                    <ReadMe href="https://medium.com/code-words/bootcamp-series-introduction-b4b28d375260" target="_blank">Read Me</ReadMe>
                </ArticleDetails>
           </Article>
           <Article>
                <ThumbnailContainer>
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
                <ArticleDetails>
                    <ArticleTitle>Bootcamp Series Part One: Why choose a Coding Bootcamp?</ArticleTitle>
                    <ReadMe href="https://medium.com/code-words/bootcamp-series-why-choose-a-coding-bootcamp-c4315688a8d8" target="_blank">Read Me</ReadMe>
                </ArticleDetails>
           </Article>
           <Article>
                <ThumbnailContainer>
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
                <ArticleDetails>
                    <ArticleTitle>Bootcamp Series Part Two: How To Choose The Right Coding Bootcamp</ArticleTitle>
                    <ReadMe href="https://medium.com/code-words/bootcamp-series-how-to-choose-the-right-coding-bootcamp-ff207dcf9f86" target="_blank">Read Me</ReadMe>
                </ArticleDetails>
           </Article>
           <Article>
                <ThumbnailContainer>
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
                <ArticleDetails>
                    <ArticleTitle>Bootcamp Series Part Three: How to Prepare for your Coding Bootcamp</ArticleTitle>
                    <ReadMe href="https://medium.com/code-words/bootcamp-series-how-to-prepare-for-your-coding-bootcamp-f4293fbbf4a5" target="_blank">Read Me</ReadMe>
                </ArticleDetails>
           </Article>
           <Article>
                <ThumbnailContainer>
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
                <ArticleDetails>
                    <ArticleTitle>Bootcamp Series Part Four: Managing Your Time, Mind and Health During Your Coding Bootcamp</ArticleTitle>
                    <ReadMe href="https://medium.com/code-words/bootcamp-series-managing-your-time-mind-and-health-during-your-coding-bootcamp-8db29f6237e" target="_blank">Read Me</ReadMe>
                </ArticleDetails>
           </Article>
           <Article>
                <ThumbnailContainer>
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
