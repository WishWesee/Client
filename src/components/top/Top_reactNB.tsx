import React from 'react';
import Arrow_Left from '@/assets/icons/화면GUI_Line/2020/Arrow_Left.svg?react';
import { constants } from '@/constants/Comp_Top.ts';
import * as style from '@/styles/essentialComponents/top/TopReactNBStyles';

const ReactNB: React.FC = () => {
  return (
    <style.TopReactNB>
      <style.BtnRNBack>
        <Arrow_Left />
        {constants.Btn_rNB_Back}
      </style.BtnRNBack>

      <style.BtnRNSave>{constants.Btn_rNB_Save}</style.BtnRNSave>
    </style.TopReactNB>
  );
};

export default ReactNB;