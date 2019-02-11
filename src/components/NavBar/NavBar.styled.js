import styled from 'styled-components';

export const StyledNavBar = styled.div`
    height: 80px;
    padding: 35px 45px 10px 45px;
`;

export const SendMessageButton = styled.button`
    border: none;
    color: #333;
    font-weight: bold;
    font-size: 22px;
    font-family: 'PT Serif', serif;
    cursor: pointer;
    float: right;
    outline: none;
    letter-spacing: 0;
    transition: all 280ms ease-in-out;


    &:hover {
        color: #777;
        letter-spacing: 3px;
        transition: all 280ms ease-in-out;
    }

    &:active {
        color: #777;
        letter-spacing: 3px;
    }

`;
