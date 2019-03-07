import React from 'react';

import { 
    StyledOrbitMacBook,
    Screenshot,
    ScreenBackground,
    MacBook,
} from './OrbitMacBook.styled';

const OrbitMacBook = () => (
    <StyledOrbitMacBook>
        <Screenshot src="../../assets/snapshot.png" alt="Orbit" />
        <MacBook src="../../assets/mockup.png" alt="Macbook" />
        <ScreenBackground />
    </StyledOrbitMacBook>
);
  
export default OrbitMacBook;
  