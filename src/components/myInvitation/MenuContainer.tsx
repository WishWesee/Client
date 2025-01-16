import React from 'react';
import LetterContainer from '@/components/myInvitation/LetterContainer';
import ArrowRight from '@/assets/icons/화면GUI_Line/2828/Arrow_Right.svg?react';
import * as style from '@/styles/myInvitation/MenuContainerStyle';
import { MenuSubText } from '@constants/myInvitation/MyInvitation';

type NBProps = {
  MenuTitle: string;
  MenuSub?: string;
  ShowDetailBool?: boolean;
};

const SlideBar: React.FC<NBProps> = ({ MenuTitle, MenuSub, ShowDetailBool }) => {
  return (
    <>
        {ShowDetailBool ?
         <style.MenuContainerWithArrow>
            <style.MenuTitleBox>{MenuTitle}</style.MenuTitleBox>
            <ArrowRight/>
        </style.MenuContainerWithArrow>
        
        : 

        <style.MenuContainer>
            <style.MenuTitleBox>{MenuTitle}</style.MenuTitleBox>
            {MenuSub ? <style.MenuSubBox>{MenuSub}{MenuSubText.number}</style.MenuSubBox> : null}
        </style.MenuContainer>

        }

        <style.SlideBar>

            <LetterContainer Title='제목' Date='2005.00.00'/>
            <LetterContainer Title='제목' Date='2005.00.00'/>
            <LetterContainer Title='제목' Date='2005.00.00'/>
            <LetterContainer Title='제목' Date='2005.00.00'/>

        </style.SlideBar>
    </>
  );
};

export default SlideBar;