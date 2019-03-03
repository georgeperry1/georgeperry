import styled from 'styled-components';

import { BREAK_POINTS } from '../../config';

export const StyledLogoBox = styled.div`
    width: 80px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    z-index: 15;
    margin: 0;

    ${BREAK_POINTS.DESKTOP_SMALL} {
        flex-direction: row;
        width: 500px;
        height: 80px;
        margin-bottom: 60px;
    }
`;

export const TechLogo = styled.img`
    width: 60px;
`;
