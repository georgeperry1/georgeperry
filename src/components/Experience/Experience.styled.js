import styled from 'styled-components';

import { BREAK_POINTS } from '../../config';

export const StyledExperience = styled.div`
   display: flex;
    flex-direction: column;
    background: #fff;
    padding: 100px 150px 120px 150px;
    margin: 0;

    ${BREAK_POINTS.DESKTOP_SMALL} {
        padding: 60px 100px 60px 100px;
    }

    ${BREAK_POINTS.TABLET} {
        padding: 60px;
    }

    ${BREAK_POINTS.MOBILE} {
        padding: 60px 10px 60px 10px;
    }
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
    margin-bottom: 15px;
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

    ${BREAK_POINTS.MOBILE} {
        width: 80px;
    }
`;

export const DateBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    height: 70px;
    margin-top: 20px;
`;

export const DateItem = styled.div`
    color: #2C3243;
    font-size: 18px;
    text-align: center;

    ${BREAK_POINTS.MOBILE} {
        font-size: 16px;
    }
`;

export const CompanyName = styled.div`
    color: #2C3243;
    font-size: 18px;
    font-weight: bold;
    text-align: center;

    ${BREAK_POINTS.MOBILE} {
        font-size: 16px;
    }
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
