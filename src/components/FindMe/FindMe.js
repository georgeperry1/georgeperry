import React, { Component } from 'react';

import { 
    StyledFindMe,
    FindMeHeader,
    IconRow,
    GitHubIcon,
    TwitterIcon,
    StackOverflowIcon,
    LinkedInIcon,
    NpmIcon,
    MediumIcon,
} from './FindMe.styled';

class FindMe extends Component {
    render() {
        return(
            <StyledFindMe>
                <FindMeHeader>Find Me</FindMeHeader>
                <IconRow>
                    <a href="https://github.com/georgeperry1" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon size={60} />
                    </a>
                    <a href="https://stackoverflow.com/users/8893810/georgeperry?tab=profile" target="_blank" rel="noopener noreferrer">
                        <StackOverflowIcon size={60} />
                    </a>
                    <a href="https://twitter.com/georgeperry18" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon size={60} />
                    </a>
                    <a href="https://www.linkedin.com/in/george-perry-aa8915b6/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon size={60} />
                    </a>
                    <a href="https://www.npmjs.com/~georgeperry" target="_blank" rel="noopener noreferrer">
                        <NpmIcon size={60} />
                    </a>
                    <a href="https://medium.com/@GeorgePerry" target="_blank" rel="noopener noreferrer">
                        <MediumIcon size={60} />
                    </a>
                </IconRow>
            </StyledFindMe>
        );
    }
}

export default FindMe;
