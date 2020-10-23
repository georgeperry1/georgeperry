import React from 'react';

import { Span } from './Emoji.styled';

const Emoji = ({ label, emoji }) => (
  <Span
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={!label ? "false" : "true"}
  >
    {emoji}
  </Span>
);

export default Emoji;
