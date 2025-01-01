import React, { useState } from 'react';
import '../styles/Comp_Btn.css';

type Button_Bottom_Next_Props = {
  text: string;
  color: string;
};

const Button_Bottom_Next: React.FC<Button_Bottom_Next_Props> = ({text, color}) => {

  const [state, setState] = useState(color);

  return (
    <button
      className={`toggle-button ${state == 'blue' ? 'blue' : ''}`}
    >
      {text}
    </button>
  );
};

export default Button_Bottom_Next;
