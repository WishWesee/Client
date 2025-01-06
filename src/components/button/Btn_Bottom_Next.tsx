import React, { useState } from 'react';
import * as style from '@/styles/essentialComponents/button/ButtonBottomNextStyle';

type ButtonBottomNextProps = {
  text: string;
  color: string;
};

const ButtonBottomNext: React.FC<ButtonBottomNextProps> = ({ text, color }) => {
  const [state, setState] = useState(color);

  return (
    <style.ToggleButton className={state === 'blue' ? 'blue' : ''}>
      {text}
    </style.ToggleButton>
  );
};

export default ButtonBottomNext;
