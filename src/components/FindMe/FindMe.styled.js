import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { github } from 'react-icons-kit/icomoon/github';
import { npm } from 'react-icons-kit/icomoon/npm';
import { stackoverflow } from 'react-icons-kit/icomoon/stackoverflow';
import { linkedin2 } from 'react-icons-kit/icomoon/linkedin2';
import { twitter } from 'react-icons-kit/icomoon/twitter';
import { medium } from 'react-icons-kit/entypo/medium';

export const StyledFindMe = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #2C3243;
    padding: 30px 0px 80px 0px;
    margin: 0;
`;

export const FindMeHeader = styled.p`
    width: 100%;
    font-size: 40px;
    letter-spacing: 5px;
    text-align: center;
    position: relative;
    top: 10px;
    font-weight: bold;
    color: #fff;
`;

export const IconRow = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0px 60px;
`;

const GitHub = props => (
    <div {...props}>
      <Icon icon={github} size={props.size} />
    </div>
);

export const GitHubIcon = styled(GitHub)`
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #FBB018;
    }
`;

const StackOverflow = props => (
    <div {...props}>
      <Icon icon={stackoverflow} size={props.size} />
    </div>
);

export const StackOverflowIcon = styled(StackOverflow)`
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #FBB018;
    }
`;

const Twitter = props => (
    <div {...props}>
      <Icon icon={twitter} size={props.size} />
    </div>
);

export const TwitterIcon = styled(Twitter)`
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #FBB018;
    }
`;

const LinkedIn = props => (
    <div {...props}>
      <Icon icon={linkedin2} size={props.size} />
    </div>
);

export const LinkedInIcon = styled(LinkedIn)`
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #FBB018;
    }
`;

const Npm = props => (
    <div {...props}>
      <Icon icon={npm} size={props.size} />
    </div>
);

export const NpmIcon = styled(Npm)`
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #FBB018;
    }
`;

const Medium = props => (
    <div {...props}>
      <Icon icon={medium} size={props.size} />
    </div>
);

export const MediumIcon = styled(Medium)`
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #FBB018;
    }
`;

export const EmailMe = styled.a`
    width: 100%;
    font-size: 20px;
    letter-spacing: 2px;
    text-align: center;
    font-weight: bold;
    color: #fff;
    margin-top: 30px;
    
    &:hover {
        color: #FBB018;
    }
`;
