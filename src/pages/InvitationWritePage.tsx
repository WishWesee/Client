import CheckComponent from "@/components/invitationWrite/CheckComponent";
import InvitationWriteBottomButton from "@/components/invitationWrite/InvitationWriteBottomButton";
import InvitationWriteComponent from "@/components/invitationWrite/InvitationWriteComponent";
import InvitationWriteHeader from "@/components/invitationWrite/InvitationWriteHeader";
import InvitationWriteToolBar from "@/components/invitationWrite/InvitationWriteToolBar";
import { ToolBarProvider } from "@/contexts/toolBarContext";
import useInvitationStore from "@/store/invitation";
import * as S from "@styles/invitationWrite/invitationWritePage";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const InvitationWritePage = () => {
  const { invitation, cardImage, photoImages } = useInvitationStore();

  const [isButtonEnable] = useState<boolean>(false);
  const blocksRef = useRef(invitation.blocks || undefined);
  const [blocks, setBlocks] = useState(invitation.blocks || undefined);
  const imagesRef = useRef(photoImages || undefined);
  const [images, setImages] = useState(photoImages || undefined);

  const [currentSequence, setCurrentSequence] = useState(0);
  const [isCheckComponent, setIsCheckComponent] = useState(false);
  // const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const navigate = useNavigate();

  const setBlocksRef = (newBlocks: typeof invitation.blocks) => {
    blocksRef.current = newBlocks;
  };

  const setImagesRef = (newImages: typeof photoImages) => {
    imagesRef.current = newImages;
  };

  useEffect(() => {
    setBlocks([...invitation.blocks]);
  }, [invitation.blocks]);

  useEffect(() => {
    setImages([...photoImages]);
  }, [photoImages]);

  return (
    <ToolBarProvider>
      <S.Container>
        {!isCheckComponent ? (
          <>
            <InvitationWriteHeader
              backText={"카드 선택"}
              buttonType={"저장"}
              isEnable={isButtonEnable}
              onLeftBtnClick={() => navigate("/choicecard")}
            />
            <InvitationWriteToolBar
              currentSequence={currentSequence}
              setBlocks={setBlocksRef}
              setImages={setImagesRef}
            />
            <InvitationWriteComponent
              currentSequence={currentSequence}
              setCurrentSequence={setCurrentSequence}
              blocks={blocks}
              images={images}
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
