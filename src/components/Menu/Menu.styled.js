import styled from 'styled-components';
import { stack as MenuWrapper } from 'react-burger-menu';

export const StyledMenu = styled.div`
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 100;
`;

export const MenuItem = styled.a`
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    text-decoration: none;
    margin: 0px 0px 30px 0px;
    outline: none;
    transition: all 280ms ease-in-out;

    &:hover {
        color: #ccc;
        transition: all 280ms ease-in-out;
    }
`;

export const StyledMenuWrapper = styled(MenuWrapper)`
`;
