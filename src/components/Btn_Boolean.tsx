import React, { useState } from 'react';
import '../styles/Comp_Btn.css';

const SlideButton: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      className={`Slide-button ${isToggled ? 'toggled' : ''}`}
      onClick={handleToggle}
    >
      <div className={`Slide-circle ${isToggled ? 'toggled' : ''}`}></div>
    </div>
  );
};

export default SlideButton;
