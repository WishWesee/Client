import CheckComponent from "@/components/invitationWrite/CheckComponent";
import InvitationWriteBottomButton from "@/components/invitationWrite/InvitationWriteBottomButton";
import InvitationWriteComponent from "@/components/invitationWrite/InvitationWriteComponent";
import InvitationWriteHeader from "@/components/invitationWrite/InvitationWriteHeader";
import InvitationWriteToolBar from "@/components/invitationWrite/InvitationWriteToolBar";
import { ToolBarProvider } from "@/contexts/toolBarContext";
import useInvitationStore from "@/store/invitation";
import * as S from "@styles/invitationWrite/invitationWritePage";
import { useEffect, useRef, useState } from "react";

const InvitationWritePage = () => {
  const { invitation, cardImage, photoImages } = useInvitationStore();

  const [isButtonEnable] = useState<boolean>(false);
  const blocksRef = useRef(invitation.blocks || undefined);
  const [blocks, setBlocks] = useState(invitation.blocks || undefined);
  const [currentSequence, setCurrentSequence] = useState(0);
  const [isCheckComponent, setIsCheckComponent] = useState(false);
  // const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const setBlocksRef = (newBlocks: typeof invitation.blocks) => {
    blocksRef.current = newBlocks;
  };

  useEffect(() => {
    setBlocks([...invitation.blocks]);
  }, [invitation.blocks]);

  return (
    <ToolBarProvider>
      <S.Container>
        {!isCheckComponent ? (
          <>
            <InvitationWriteHeader
              backText={"카드 선택"}
              buttonType={"저장"}
              isEnable={isButtonEnable}
            />
            <InvitationWriteToolBar
              currentSequence={currentSequence}
              setBlocks={setBlocksRef}
            />
            <InvitationWriteComponent
              currentSequence={currentSequence}
              setCurrentSequence={setCurrentSequence}
              blocks={blocks}
            />
            <InvitationWriteBottomButton
              isSubmit={true}
              text={"다음"}
              onClick={() => setIsCheckComponent(true)}
            />
          </>
        ) : (
          <CheckComponent
            data={{
              invitation: invitation,
              cardImage: cardImage,
              photoImages: photoImages,
            }}
            isCheck={false}
          />
        )}
      </S.Container>
    </ToolBarProvider>
  );
};

export default InvitationWritePage;
