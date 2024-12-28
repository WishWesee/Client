import React, { useState } from 'react';
import { constants } from '../constants/Comp_Btn.ts';
import '../styles/Comp_Btn.css';

const Btn_Modal_Caution: React.FC = () => {
  const [state, setState] = useState(0); // 0: 회색, 1: 빨, 2: 파

  const handleClick = () => {
    setState((state + 1) % 3);
  };

  return (
    <button
      className={`Caution-button ${state == 1 ? 'red' : state == 2 ? 'blue' : 'default'}`}
      onClick={handleClick}
    >
    {constants.Btn_text}
    </button>
  );
};

export default Btn_Modal_Caution;
