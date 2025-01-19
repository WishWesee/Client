import React from 'react';
import Arrow_Left from '@/assets/icons/화면GUI_Line/2020/Arrow_Left.tsx';
import * as style from '@/styles/essentialComponents/top/TopReactNBStyles';

type NBProps = {
  Back: string;
  Front: string;
  Color?: string;
};

const ReactNB: React.FC<NBProps> = ({ Back, Front, Color = 'blue' }) => {
  return (
    <style.TopReactNB className={Color == 'white' ? 'white' : undefined}>
      <style.BtnRNBack className={Color == 'white' ? 'white': undefined}>
        {Color == 'white' ? <Arrow_Left stroke = '#FCFCFD'/> : <Arrow_Left />}
        { Back }
      </style.BtnRNBack>
      { Front !== 'null' ? <style.BtnRNSave className={Color == 'blue' ? '' : 'white'}>{ Front }</style.BtnRNSave> : null }
    </style.TopReactNB>
  );
};

export default ReactNB;