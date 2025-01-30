import React from 'react';

const Arrow_Left: React.FC<{ stroke?: string }> = ({ stroke = "#151516" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 16L7 10L13 4" stroke={stroke} />
  </svg>
);

export default Arrow_Left;
