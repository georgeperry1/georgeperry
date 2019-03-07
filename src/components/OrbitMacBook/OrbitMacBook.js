import React from 'react';

import { 
    StyledOrbitMacBook,
    Screenshot,
    ScreenBackground,
} from './OrbitMacBook.styled';

const OrbitMacBook = () => (
    <StyledOrbitMacBook src="../../assets/mockup.png">
        <ScreenBackground>    
            <Screenshot src="../../assets/snapshot.png" alt="Orbit" />
        </ScreenBackground>
    </StyledOrbitMacBook>
);
  
export default OrbitMacBook;
  