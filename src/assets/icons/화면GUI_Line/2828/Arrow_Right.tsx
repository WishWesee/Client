import React from 'react';

const Arrow_Left: React.FC<{ stroke?: string }> = ({ stroke = "#151516" }) => (

<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6L18 14L10 22" stroke={stroke} stroke-width="2"/>
</svg>

);
export default Arrow_Left;