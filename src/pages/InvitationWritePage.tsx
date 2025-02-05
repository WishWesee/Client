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

  const blocksRef = useRef(invitation.blocks || undefined);
  const [blocks, setBlocks] = useState(invitation.blocks || undefined);
  const imagesRef = useRef(photoImages || undefined);
  const [images, setImages] = useState(photoImages || undefined);

  const [currentSequence, setCurrentSequence] = useState(0);
  const [isCheckComponent, setIsCheckComponent] = useState(false);
  // const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const navigate = useNavigate();

  const isSubmit =
    (invitation.location !== "" || invitation.userLocation !== "") &&
    (invitation.startDate !== "" || invitation.voteDeadline !== "");

  const setBlocksRef = (newBlocks: typeof invitation.blocks) => {
    blocksRef.current = newBlocks;
  };

  const setImagesRef = (newImages: typeof photoImages) => {
    imagesRef.current = newImages;
  };

  useEffect(() => {
    setBlocks([...invitation.blocks]);
    console.log(blocks);
  }, [invitation.blocks]);

  useEffect(() => {
    setImages([...photoImages]);
  }, [photoImages]);

  const handleSave = () => {};

  return (
    <ToolBarProvider>
      <S.Container>
        {!isCheckComponent ? (
          <>
            <InvitationWriteHeader
              backText={"카드 선택"}
              buttonType={"저장"}
              isEnable={isSubmit}
              onLeftBtnClick={() => navigate("/choicecard")}
              onRightBtnClick={() => handleSave()}
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
              isSubmit={isSubmit}
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
