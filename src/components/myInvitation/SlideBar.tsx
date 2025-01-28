import React from 'react';
import MenuContainer from '@/components/myInvitation/MenuContainer';
import * as style from '@/styles/myInvitation/SlideBarStyle';

type Invitation = {
  invitationId: number;
  cardImage: string;
  title: string;
  date: string; 
};

type NBProps = {
  MenuTitle: string;
  Data: Invitation[];
  MenuSub?: string;
  ShowDetailBool?: boolean;
};

const SlideBar: React.FC<NBProps> = ({ MenuTitle, MenuSub, ShowDetailBool, Data }) => {
  return (
    <style.CardContainer>

       <MenuContainer MenuTitle={MenuTitle} MenuSub={MenuSub} ShowDetailBool={ShowDetailBool} Data={Data} />

    </style.CardContainer>
  );
};

export default SlideBar;