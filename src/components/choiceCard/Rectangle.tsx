import React from 'react';
import * as style from '@/styles/choiceCard/RectangleStyle';

type RectangleProps = {
  toggled: boolean;
  onClick: () => void;
  children?: React.ReactNode; // children 속성 추가
};

const Rectangle: React.FC<RectangleProps> = ({ toggled, onClick, children }) => {
  return toggled ? (
    <style.ActiveRectangle onClick={onClick}>
      {children} 
    </style.ActiveRectangle>
  ) : (
    <style.Rectangle onClick={onClick}>
      {children} 
    </style.Rectangle>
  );
};

export default Rectangle;
