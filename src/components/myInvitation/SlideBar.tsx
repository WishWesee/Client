import React from 'react';
import MenuContainer from '@/components/myInvitation/MenuContainer';
import * as style from '@/styles/myInvitation/SlideBarStyle';

type NBProps = {
  MenuTitle: string;
  MenuSub?: string;
  ShowDetailBool?: boolean;
};

const SlideBar: React.FC<NBProps> = ({ MenuTitle, MenuSub, ShowDetailBool }) => {
  return (
    <style.CardContainer>

       <MenuContainer MenuTitle={MenuTitle} MenuSub={MenuSub} ShowDetailBool={ShowDetailBool} />

    </style.CardContainer>
  );
};

export default SlideBar;