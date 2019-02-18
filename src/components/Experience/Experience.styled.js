import styled from 'styled-components';

export const StyledExperience = styled.div`
   display: flex;
    flex-direction: column;
    background: #fff;
    padding: 100px 150px 120px 150px;
`;

export const ExperienceHeading = styled.h1`
    color: #2C3243;
    width: 100%;
    font-size: 40px;
    letter-spacing: 5px;
    text-align: center;
    position: relative;
    top: -50px;
`;

export const TimelineBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const CompanyBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const CompanyLogo = styled.div`
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        border-radius: 50px;
    }
`;

export const DateBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const DateItem = styled.h3`
    color: #2C3243;
`;

export const Timeline = styled.div`
    width: 100%;
    height: 3px;
    background: #2C3243;
    border-radius: 10px;
`;

export const OffshootBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const Offshoot = styled.div`
    width: 3px;
    height: 40px;
    background: #2C3243;
    border-radius: 20px 20px 0px 0px;
`;
