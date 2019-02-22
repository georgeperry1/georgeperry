import styled from 'styled-components';

export const StyledProjects = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 200px 0px 120px 0px;
`;

export const ProjectBox = styled.div`
    display: flex;
    background: #FBB018;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 450px;
    box-sizing: border-box;
    position: relative;
    padding: 20px;

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

export const MacBook = styled.img`
    position: relative;
    width: 500px;
    z-index: 10;
    left: 60px;
    top: 270px;
`;

export const ScreenBackground = styled.div`
    width: 337px;
    min-height: 222px;
    position: relative;
    z-index: 11;
    background: #000;
    top: -50px;
    left: 139px;
`;

export const Screenshot = styled.img`
    width: 337px;
    position: relative;
    z-index: 12;
    top: 530px;
    left: 139px;
`;

export const ProjectLogo = styled.img`
    z-index: 15;
    position: relative;
    top: 250px;
    left: 1200px;
    border-radius: 50%;
    width: 120px;
`;

export const LogoBox = styled.div`
    width: 80px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    top: -400px;
    left: 650px;
    z-index: 15;
`;

export const TechLogos = styled.img`
    width: 60px;
`;

export const DescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 500px;
    position: relative;
    top: -850px;
    left: 860px;
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
