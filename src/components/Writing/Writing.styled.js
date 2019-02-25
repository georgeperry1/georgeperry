import styled from 'styled-components';

import { buzz } from '../NavBar/NavBar.styled';

export const StyledWriting = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    /* padding: 200px 0px 120px 0px; */
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
`;

export const Thumbnail = styled.img`
    width: 250px;
`;

export const ArticleDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ArticleTitle = styled.p`
    color: #2C3243;
    font-size: 20px;
    letter-spacing: 2px;
`;

export const ReadMe = styled.a`
    color: #2C3243;
    font-size: 12px;
    letter-spacing: 1px;

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
