import styled from 'styled-components';

export const StyledProjects = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 200px 0px 120px 0px;
`;

export const YellowProjectBox = styled.div`
    display: flex;
    background: #FBB018;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 450px;
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

export const WhiteProjectBox = styled.div`
    display: flex;
    background: #fff;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 600px;
    padding: 0px 20px 100px 60px;
    margin-top: 100px;
`;

export const ProjectContents = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

export const MobileContainer = styled.div`
    position: relative;
    right: 50px;
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
`;
