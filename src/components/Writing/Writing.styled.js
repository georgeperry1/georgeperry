import styled, { keyframes } from 'styled-components';

import { buzz } from '../NavBar/NavBar.styled';

export const StyledWriting = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    background: #fff;
    padding: 20px 10px 100px 10px;
    margin: 0;
`;

export const WritingHeading = styled.p`
    color: #2C3243;
    width: 100%;
    font-size: 40px;
    letter-spacing: 5px;
    text-align: center;
    position: relative;
    top: 0px;
    font-weight: bold;
`;

export const Article = styled.div`
    display: flex;
    flex-direction: row;
    background: #fff;
    justify-content: space-around;
    align-items: center;
    width: auto;
    align-self: center;
    margin: 25px 0px;
`;

export const ThumbnailContainer = styled.div`
    width: 250px;
    height: 160px;
    position: relative;
    left: -270px;
`;

export const StatBox = styled.div`
    width: 90px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; 
`;

export const Stat = styled.p`
    font-size: 20px;
    color: #2C3243;
    text-align: center;
    padding: 0;
    margin: 0;
`;

export const StatLabel = styled.p`
    font-size: 16px;
    color: #2C3243;
    text-align: center;
    padding: 0;
    margin: 0;
`;

export const ThumbnailStatBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    top: -164px;
    opacity: 0;
    transition: all 400ms ease-in-out;

    &:hover {
        transition: all 400ms ease-in-out;
        opacity: 1;
        background: rgba(255, 255, 255, 0.7);
    }
`;

export const Thumbnail = styled.img`
    width: 250px;
    height: 100%;
`;

export const ArticleDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    padding-left: 30px; 
    position: relative;
    right: -270px;
`;

export const ArticleTitle = styled.p`
    color: #2C3243;
    font-size: 24px;
    letter-spacing: 2px;
`;

export const ReadMe = styled.a`
    color: #2C3243;
    font-size: 14px;
    letter-spacing: 1px;
    width: 70px;

    &:hover {
        color: #FBB018;
        -webkit-animation-name: ${buzz};
        animation-name: ${buzz};
        -webkit-animation-duration: 0.15s;
        animation-duration: 0.15s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
    }
`;
