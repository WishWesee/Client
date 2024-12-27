import React, { useState } from 'react';
import '../styles/Btn.css';

const RadioButton: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      className={`Radio-button ${isToggled ? 'toggled' : ''}`}
      onClick={handleToggle}
    >
      <div className={`Radio-circle ${isToggled ? 'toggled' : ''}`}></div>
    </div>
  );
};

export default RadioButton;
