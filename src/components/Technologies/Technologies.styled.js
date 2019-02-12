import styled from 'styled-components';
import GifPlayer from 'react-gif-player';

export const StyledTechnologies = styled.div`
    display: flex;
    flex-direction: column;
    background: #2C3243;
    padding: 120px 150px 0px 150px;
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
`;

export const TechnologyItem = styled.img`
    height: 80px;
    width: 80px;
    background: transparent;
    color: #fff;
    position: relative;
    top: 300px;
`;

export const TechnologyGifItem = styled(GifPlayer)`
    position: relative;
    top: 300px;
    width: 120px;
`;
