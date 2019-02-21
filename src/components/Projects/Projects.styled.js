import styled from 'styled-components';

export const StyledProjects = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 200px 0px 120px 0px;
`;

export const ProjectBox = styled.div`
    display: flex;
    background: #373a47;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 400px;
    box-sizing: border-box;
    position: relative;
    padding: 20px;

    &::before {
        content: '';
        background: #373a47;
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
        background: #373a47;
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

export const MacBook = styled.img`
    position: relative;
    width: 500px;
    z-index: 10;
    left: 200px;
    top: 30px;
`;

export const ScreenBackground = styled.div`
    width: 335px;
    min-height: 222px;
    position: relative;
    z-index: 11;
    background: #000;
    top: -290px;
    left: 280px;
`;

export const Screenshot = styled.img`
    width: 335px;
    position: relative;
    z-index: 12;
    top: 290px;
    left: 280px;
`;

export const DescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 700px;
    position: relative;
    top: -500px;
    left: 800px;
    z-index: 15;
`;

export const DescriptionHeading = styled.p`
    font-size: 30px;
    color: #fff;
    font-weight: bold;
    letter-spacing: 4px;
`;

export const DescriptionText = styled.p`
    font-size: 18px;
    color: #fff;
    letter-spacing: 2px;
`;
