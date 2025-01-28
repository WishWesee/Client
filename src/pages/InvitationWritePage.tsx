import InvitationWriteComponent from "@/components/invitationWrite/InvitationWriteComponent";
import InvitationWriteHeader from "@/components/invitationWrite/InvitationWriteHeader";
import InvitationWriteToolBar from "@/components/invitationWrite/InvitationWriteToolBar";
import { ToolBarProvider } from "@/contexts/toolBarContext";
import * as S from "@styles/invitationWrite/invitationWritePage";
import { useState } from "react";

const InvitationWritePage = () => {
  const [isButtonEnable, setIsButtonEnable] = useState<boolean>(false);

  return (
    <ToolBarProvider>
      <S.Container>
        <InvitationWriteHeader
          backText={"카드 선택"}
          buttonType={"저장"}
          isEnable={isButtonEnable}
        />
        <InvitationWriteToolBar />
        <InvitationWriteComponent />
      </S.Container>
    </ToolBarProvider>
  );
};

export default InvitationWritePage;
