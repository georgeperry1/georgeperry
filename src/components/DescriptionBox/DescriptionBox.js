import React from 'react';

import { 
    StyledDescriptionBox,
    DescriptionHeading,
    DescriptionText,
} from './DescriptionBox.styled';

const DescriptionBox = ({ projectName, projectDescription }) => (
    <StyledDescriptionBox>
        <DescriptionHeading>{projectName}</DescriptionHeading>
        <DescriptionText>{projectDescription}</DescriptionText>
    </StyledDescriptionBox>
);
  
export default DescriptionBox;
