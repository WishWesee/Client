import React, { useState } from 'react';
import Wrap from "@/components/choiceCard/Wrap";
import SlideBar from "@/components/myInvitation/SlideBar";
import { WrapTexts, MenuTitle } from "@/constants/myInvitation/MyInvitation";
import * as style from "@/styles/myInvitation/MyInvitationPageStyle";


const MyInviation: React.FC = () => {

  return (
    <>
        <style.Container>
            <Wrap Title={WrapTexts.Title} SubText={WrapTexts.SubText}/>
            <style.SlideBarContainer>
              <SlideBar MenuTitle={MenuTitle.Writing} MenuSub='n'/>
              <SlideBar MenuTitle={MenuTitle.Send} ShowDetailBool={true}/>
              <SlideBar MenuTitle={MenuTitle.Recieve} ShowDetailBool={true}/>
            </style.SlideBarContainer>
        </style.Container>
    </>
  );
};

export default MyInviation;
