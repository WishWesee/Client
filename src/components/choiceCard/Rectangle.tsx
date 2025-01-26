import React from 'react';
import * as style from '@/styles/choiceCard/RectangleStyle';

type RectangleProps = {
  toggled: boolean;
  onClick: () => void;
}

const Rectangle: React.FC<RectangleProps> = ({toggled, onClick}) => {
  return toggled ? (
    <style.ActiveRectangle onClick={onClick}/>
  ) :   (
    <style.Rectangle onClick={onClick}/>
  )
};

export default Rectangle;