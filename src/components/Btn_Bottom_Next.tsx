import React, { useState } from 'react';
import '../styles/Comp_Btn.css';

type Button_Bottom_Next_Props = {
  text: string;
};

const Button_Bottom_Next: React.FC<Button_Bottom_Next_Props> = ({text}) => {

  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      className={`toggle-button ${isToggled ? 'toggled' : ''}`}
      onClick={handleClick} //나중에는 State로 조작
    >
      {text}
    </button>
  );
};

export default Button_Bottom_Next;
