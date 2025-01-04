import React, { useState } from 'react';
import * as style from '@/styles/essentialComponents/button/RadioButtonStyle';

const RadioButton: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <style.RadioButton
      className={isToggled ? 'toggled' : ''}
      onClick={handleToggle}
    >
      <style.RadioCircle className={isToggled ? 'toggled' : ''} />
    </style.RadioButton>
  );
};

export default RadioButton;
