import styled from 'styled-components';

import { BREAK_POINTS } from '../../config';

export const StyledProjects = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 200px 0px 120px 0px;
    margin: 0;

    ${BREAK_POINTS.DESKTOP_SMALL} {
        padding: 120px 0px;
    }

    ${BREAK_POINTS.TABLET} {
        padding: 100px 0px;
    }

    ${BREAK_POINTS.MOBILE} {
        padding: 80px 0px;
    }
`;

export const YellowProjectBox = styled.div`
    display: flex;
    background: #FBB018;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 600px;
    position: relative;
    padding: 20px;

    ${BREAK_POINTS.DESKTOP_SMALL} {
        padding: 0px 0px 100px 0px;
        height: 1050px;
        flex-direction: column;
    }

    ${BREAK_POINTS.TABLET} {
        padding: 0px 0px 100px 0px;
        height: 1150px;
        flex-direction: column;
    }

    ${BREAK_POINTS.MOBILE} {
        padding: 0px 0px 100px 0px;
        height: 1250px;
        flex-direction: column;
    }

    &::before {
        content: '';
        background: #FBB018;
        height: 150px;
        -webkit-transform: skewY(-3deg);
        -moz-transform: skewY(-3deg);
        -ms-transform: skewY(-3deg);
        -o-transform: skewY(-3deg);
        transform: skewY(-3deg);
        position: absolute;
        top: -70px;    
        left: 0;
        right: 0;
    }

    &::after {
        content: '';
        background: #FBB018;
        height: 150px;
        -webkit-transform: skewY(3deg);
        -moz-transform: skewY(3deg);
        -ms-transform: skewY(3deg);
        -o-transform: skewY(3deg);
        transform: skewY(3deg);
        position: absolute;
        bottom: -50px;    
        left: 0;
        right: 0;
    }
`;

export const WhiteProjectBox = styled.div`
    display: flex;
    background: #fff;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 600px;
    padding: 0px 20px 100px 60px;
    margin-top: 100px;

    ${BREAK_POINTS.DESKTOP_SMALL} {
        padding: 0px;
        height: 1050px;
        flex-direction: column;
    }

    ${BREAK_POINTS.TABLET} {
        padding: 0px;
        height: 1150px;
        flex-direction: column;
    }

    ${BREAK_POINTS.MOBILE} {
        padding: 0px;
        height: 1250px;
        flex-direction: column;
    }
`;

export const ProjectContents = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;

    ${BREAK_POINTS.DESKTOP_SMALL} {
        flex-direction: column-reverse;
    }
`;

export const ReverseProjectContents = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    ${BREAK_POINTS.DESKTOP_SMALL} {
        flex-direction: column;
    }
`;

export const MobileContainer = styled.div`
    position: relative;
    right: 50px;
    margin-left: 100px;
    min-width: 380px;

    ${BREAK_POINTS.DESKTOP_SMALL} {
        margin-bottom: 160px;
    }
`;

export const DialectMobileOne = styled.img`
    width: 200px;
`;

export const DialectMobileTwo = styled.img`
    width: 180px;
`;

export const TracstackMobile = styled.img`
    z-index: 16;
    width: 520px;
    margin-left: 20px;

    ${BREAK_POINTS.TABLET} {
        width: 460px;
    }

    ${BREAK_POINTS.MOBILE} {
        width: 350px;
    }
`;
