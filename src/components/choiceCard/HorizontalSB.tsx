import React from 'react';
import * as style from '@/styles/choiceCard/HorizontalSBStyle';

type SBProps = {
  Title: string;
  Toggled: boolean;
  onClick: () => void;
};

const HorizontalSB: React.FC<SBProps> = ({ Title, Toggled, onClick }) => {
  return Toggled ? (
    <style.HorizontalSBActive onClick={onClick}>{Title}</style.HorizontalSBActive>
  ) : (
    <style.HorizontalSBDefault onClick={onClick}>{Title}</style.HorizontalSBDefault>
  );
};

export default HorizontalSB;
