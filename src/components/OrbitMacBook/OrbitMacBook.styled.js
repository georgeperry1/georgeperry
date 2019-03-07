import styled from 'styled-components';

import { BREAK_POINTS } from '../../config';

export const StyledOrbitMacBook = styled.div`
    width: 500px;
    height: 350px;
    display: flex;
    background-image: ${props => (`url(${props.src})`)};
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    ${BREAK_POINTS.DESKTOP_SMALL} {
        width: 400px;
        height: 250px;
    }

    ${BREAK_POINTS.TABLET} {
        width: 400px;
        height: 250px;
    }

    ${BREAK_POINTS.MOBILE} {
        width: 350px;
        height: 250px;
    }
`;

export const ScreenBackground = styled.div`
    width: 342px;
    min-height: 222px;
    background: #000;
    z-index: 16;
    display: flex;
    justify-content: center;
    align-items: center;
    
    ${BREAK_POINTS.DESKTOP_SMALL} {
        width: 270px;
        min-height: 170px;
        position: relative;
        top: 14px;
        left: -2px;
    }

    ${BREAK_POINTS.TABLET} {
        width: 270px;
        min-height: 170px;
        position: relative;
        top: 14px;
        left: -2px;
    }

    ${BREAK_POINTS.MOBILE} {
        width: 238px;
        min-height: 150px;
        position: relative;
        top: -5px;
        left: -2px;
    }
`;

export const Screenshot = styled.img`
    width: 100%;
    z-index: 17;
   
`;
