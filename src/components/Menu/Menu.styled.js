import styled from 'styled-components';
import { stack as MenuWrapper } from 'react-burger-menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { buzz } from '../NavBar/NavBar.styled';

export const StyledMenu = styled.div`
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 100;
`;

export const MenuItem = styled(AnchorLink)`
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    margin: 0px 0px 30px 0px;
    outline: none;
    transition: all 480ms ease-in-out;

    &:hover {
        color: #FBB018;
        -webkit-animation-name: ${buzz};
        animation-name: ${buzz};
        -webkit-animation-duration: 0.15s;
        animation-duration: 0.15s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
    }
`;

export const StyledMenuWrapper = styled(MenuWrapper)`
`;
