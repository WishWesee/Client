import React, { useState } from 'react';
import * as style from '@/styles/essentialComponents/button/BtnModalCautionStyle';

type BtnModalCautionProps = {
  text: string;
  color: string;
};

const BtnModalCaution: React.FC<BtnModalCautionProps> = ({ text, color }) => {
  const [state, setState] = useState(color);

  return (
    <style.CautionButton
      className={
        color === 'red' ? 'red' : color === 'blue' ? 'blue' : 'default'
      }
    >
      {text}
    </style.CautionButton>
  );
};

export default BtnModalCaution;
