import styled from 'styled-components';

import { BREAK_POINTS } from '../../config';

export const StyledDescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 500px;
    z-index: 15;
    line-height: 2;
    margin: 0;
    padding: 0px 20px;

    ${BREAK_POINTS.DESKTOP_SMALL} {
        width: 600px;
    }

    ${BREAK_POINTS.TABLET} {
        width: 500px;
    }

    ${BREAK_POINTS.MOBILE} {
        width: 400px;
    }
`;

export const DescriptionHeading = styled.p`
    font-size: 40px;
    color: #2C3243;
    font-weight: bold;
    letter-spacing: 4px;
`;

export const DescriptionText = styled.p`
    font-size: 18px;
    color: #2C3243;
    letter-spacing: 2px;
    position: relative;
    top: -40px;

    ${BREAK_POINTS.DESKTOP_SMALL} {
        text-align: justify;
    }

    ${BREAK_POINTS.TABLET} {
        text-align: justify;
        top: -60px;
    }

    ${BREAK_POINTS.MOBILE} {
        text-align: justify;
    }
`;
