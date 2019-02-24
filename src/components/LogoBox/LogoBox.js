import React from 'react';

import { 
    StyledLogoBox,
    TechLogo,
} from './LogoBox.styled';

const LogoBox = ({ logos }) => (
    <StyledLogoBox>
       {logos.map((logo, index) => (
           <TechLogo src={logo} alt={`logo-${index}`} />
       ))}
    </StyledLogoBox>
);
  
export default LogoBox;
  