import React, { useState } from 'react';
import '../styles/Comp_Btn.css';

type Button_Bottom_Next_Props = {
  text: string;
  color: string;
};

const Btn_Modal_Caution: React.FC<Button_Bottom_Next_Props> = ({text, color}) => {
  const [state, setState] = useState(color);

  return (
    <button
      className={`Caution-button ${color == 'red' ? 'red' :  color == 'blue' ? 'blue' : 'default'}`}
      //onClick={handleClick}
    >
    {text}
    </button>
  );
};

export default Btn_Modal_Caution;
