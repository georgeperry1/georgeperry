import styled from 'styled-components';

import { BREAK_POINTS } from '../../config';

export const StyledTechnologies = styled.div`
    display: flex;
    flex-direction: column;
    background: #2C3243;
    padding: 100px 150px 120px 150px;

    ${BREAK_POINTS.DESKTOP_SMALL} {
        padding: 60px 100px 60px 100px;
    }

    ${BREAK_POINTS.TABLET} {
        padding: 60px;
    }

    ${BREAK_POINTS.MOBILE} {
        padding: 40px 0px 140px 0px;
    }
    
`;

export const TechnologiesHeading = styled.h1`
    color: #fff;
    width: 100%;
    font-size: 40px;
    letter-spacing: 5px;
    text-align: center;
    position: relative;
    top: -50px;

    ${BREAK_POINTS.DESKTOP_SMALL} {
        top: -40px;
    }

    ${BREAK_POINTS.TABLET} {
        top: -30px;
    }

    ${BREAK_POINTS.MOBILE} {
        top: -20px;
    }
`;

export const TechnologyContainer = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 20px 0px;

    ${BREAK_POINTS.DESKTOP_SMALL} {
        min-width: 600px;
    }

    ${BREAK_POINTS.TABLET} {
        min-width: 400px;
    }

    ${BREAK_POINTS.MOBILE} {
        min-width: 200px;
    }
    
`;

export const TechnologyBar = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 120px;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    background: #fff;

    ${BREAK_POINTS.DESKTOP_SMALL} {
        min-width: 600px;
        flex-wrap: wrap;
        height: auto;
    }

    ${BREAK_POINTS.TABLET} {
        min-width: 400px;
        flex-wrap: wrap;
        height: auto;
    }

    ${BREAK_POINTS.MOBILE} {
        min-width: 200px;
        flex-wrap: wrap;
        height: auto;
    }
`;

export const TechnologyItemContainer = styled.div`
    height: 80px;
    width: 80px;
    position: relative;
    transform-style: preserve-3d;
    background: transparent;
    top: 300px;
    margin: 20px;
`;

export const TechnologyItem = styled.img`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    cursor: pointer;
`;

export const TechnologyName = styled.div`
    color: #2C3243;
    background: #fff;
    font-size: 22px;
    text-align: center;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateY(180deg);
    cursor: pointer;
`;