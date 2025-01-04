import React, { useState } from 'react';
import * as style from '@/styles/essentialComponents/button/SlideButtonStyle';

const SlideButton: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <style.SlideButton
      className={isToggled ? 'toggled' : ''}
      onClick={handleToggle}
    >
      <style.SlideCircle className={isToggled ? 'toggled' : ''} />
    </style.SlideButton>
  );
};

export default SlideButton;
