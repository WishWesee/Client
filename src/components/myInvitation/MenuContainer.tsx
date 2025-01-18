import React from 'react';
import LetterContainer from '@/components/myInvitation/LetterContainer';
import ArrowRight from '@/assets/icons/화면GUI_Line/2828/Arrow_Right.tsx';
import * as style from '@/styles/myInvitation/MenuContainerStyle';
import { MenuSubText } from '@constants/myInvitation/MyInvitation';

type NBProps = {
  MenuTitle: string;
  MenuSub?: string;
  ShowDetailBool?: boolean;
};

const NoInvitationTexts = ["저장된 초대장이 없어요", "아직 보낸 초대장이 없어요", "아직 받은 초대장이 없어요"];
//API 연동할때는 초대장 받은게 없으면 ~하는 로직으로 바꿀것.
const SlideBar: React.FC<NBProps> = ({ MenuTitle, MenuSub, ShowDetailBool }) => {
  return (
    <>
        {ShowDetailBool ?
         <style.MenuContainerWithArrow>
            <style.MenuTitleBox>{MenuTitle}</style.MenuTitleBox>
            {MenuTitle == "내가 보낸 초대장" ? <ArrowRight stroke='#88898A'/> : <ArrowRight/>}
        </style.MenuContainerWithArrow>
        
        : 

        <style.MenuContainer>
            <style.MenuTitleBox>{MenuTitle}</style.MenuTitleBox>
            {MenuSub ? <style.MenuSubBox>{MenuSub}{MenuSubText.number}</style.MenuSubBox> : null}
        </style.MenuContainer>

        }

        <style.SlideBar>
        
          {MenuTitle == "내가 보낸 초대장" ?

            <style.NoInvitationText>
              {NoInvitationTexts[1]}
            </style.NoInvitationText>

          :
          <>
            <LetterContainer Title='제목' Date='2005.00.00'/>
            <LetterContainer Title='제목' Date='2005.00.00'/>
            <LetterContainer Title='제목' Date='2005.00.00'/>
            <LetterContainer Title='제목' Date='2005.00.00'/>
            </>
          }
        </style.SlideBar>
    </>
  );
};

export default SlideBar;