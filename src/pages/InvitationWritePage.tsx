import InvitationWriteComponent from "@/components/invitationWrite/InvitationWriteComponent";
import InvitationWriteHeader from "@/components/invitationWrite/InvitationWriteHeader";
import InvitationWriteToolBar from "@/components/invitationWrite/InvitationWriteToolBar";
import { ToolBarProvider } from "@/contexts/toolBarContext";
import useInvitationStore from "@/store/invitation";
import * as S from "@styles/invitationWrite/invitationWritePage";
import { useEffect, useRef, useState } from "react";

const InvitationWritePage = () => {
  const { invitation } = useInvitationStore();

  const [isButtonEnable] = useState<boolean>(false);
  const blocksRef = useRef(invitation.blocks || undefined);
  const [blocks, setBlocks] = useState(invitation.blocks || undefined);
  const currentSequence = useRef(0);

  const setBlocksRef = (newBlocks: typeof invitation.blocks) => {
    blocksRef.current = newBlocks;
  };

  const setCurrentSequence = (sequence: number) => {
    currentSequence.current = sequence;
  };

  useEffect(() => {
    blocksRef.current = invitation.blocks;
    setBlocks(blocksRef.current);
  }, [invitation.blocks]);

  return (
    <ToolBarProvider>
      <S.Container>
        <InvitationWriteHeader
          backText={"카드 선택"}
          buttonType={"저장"}
          isEnable={isButtonEnable}
        />
        <InvitationWriteToolBar
          currentSequence={currentSequence.current}
          setBlocks={setBlocksRef}
        />
        <InvitationWriteComponent
          currentSequence={currentSequence.current}
          setCurrentSequence={setCurrentSequence}
          blocks={blocks}
        />
      </S.Container>
    </ToolBarProvider>
  );
};

export default InvitationWritePage;
