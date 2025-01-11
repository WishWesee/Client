import React, { useState } from 'react';
import * as style from '@/styles/essentialComponents/button/ButtonBottomNextStyle';

type ButtonBottomNextProps = {
  text: string;
  color: string;
  onClick?: () => void;
};

const ButtonBottomNext: React.FC<ButtonBottomNextProps> = ({ text, color, onClick }) => {
  const [state, setState] = useState(color);

  return (
    <style.ToggleButton className={state === 'blue' ? 'blue' : ''} onClick={onClick}>
      {text}
    </style.ToggleButton>
  );
};

export default ButtonBottomNext;
