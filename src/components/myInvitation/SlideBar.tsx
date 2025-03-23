import React from "react";
import MenuContainer from "@/components/myInvitation/MenuContainer";
import * as style from "@/styles/myInvitation/SlideBarStyle";
import { TInviteListResItem } from "@/types/invite";

type NBProps = {
  MenuTitle: string;
  Data: TInviteListResItem[];
  MenuSub?: string;
  ShowDetailBool?: boolean;
};

const SlideBar: React.FC<NBProps> = ({
  MenuTitle,
  MenuSub,
  ShowDetailBool,
  Data,
}) => {
  return (
    <style.CardContainer>
      <MenuContainer
        MenuTitle={MenuTitle}
        MenuSub={MenuSub}
        ShowDetailBool={ShowDetailBool}
        Data={Data}
      />
    </style.CardContainer>
  );
};

export default SlideBar;
