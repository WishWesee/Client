import React, { useState } from 'react';
import '../styles/Btn.css';
import { constants } from '../constants/Btn.ts';

const Button_Bottom_Next: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      className={`toggle-button ${isToggled ? 'toggled' : ''}`}
      onClick={handleClick} //나중에는 State로 조작
    >
      {constants.Btn_text}
    </button>
  );
};

export default Button_Bottom_Next;
