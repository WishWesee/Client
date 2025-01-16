import React from 'react';
import Arrow_Left from '@/assets/icons/화면GUI_Line/2020/Arrow_Left.svg?react';
import * as style from '@/styles/essentialComponents/top/TopReactNBStyles';

type NBProps = {
  Back: string;
  Front: string;
};

const ReactNB: React.FC<NBProps> = ({ Back, Front }) => {
  return (
    <style.TopReactNB>
      <style.BtnRNBack>
        <Arrow_Left />
        { Back }
      </style.BtnRNBack>
      { Front !== 'null' ? <style.BtnRNSave>{ Front }</style.BtnRNSave> : null }
    </style.TopReactNB>
  );
};

export default ReactNB;