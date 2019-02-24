import styled from 'styled-components';

export const StyledDescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 500px;
    z-index: 15;
    line-height: 2;
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
`;
