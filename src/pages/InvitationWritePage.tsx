import CheckComponent from "@/components/invitationWrite/CheckComponent";
import InvitationWriteBottomButton from "@/components/invitationWrite/InvitationWriteBottomButton";
import InvitationWriteComponent from "@/components/invitationWrite/InvitationWriteComponent";
import InvitationWriteHeader from "@/components/invitationWrite/InvitationWriteHeader";
import InvitationWriteToolBar from "@/components/invitationWrite/InvitationWriteToolBar";
import CheckModal from "@/components/modal/CheckModal";
import { ToolBarProvider } from "@/contexts/toolBarContext";
import { usePostInvitationSave } from "@/hooks/write/usePostInvitation";
import useInvitationStore from "@/store/invitation";
import * as S from "@styles/invitationWrite/invitationWritePage";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const InvitationWritePage = () => {
  const { invitation, cardImage, photoImages, setInvitation } =
    useInvitationStore();

  const blocksRef = useRef(invitation.blocks || undefined);
  const [blocks, setBlocks] = useState(invitation.blocks || undefined);
  const imagesRef = useRef(photoImages || undefined);
  const [images, setImages] = useState(photoImages || undefined);

  const [currentSequence, setCurrentSequence] = useState(0);
  const [isCheckComponent, setIsCheckComponent] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const navigate = useNavigate();
  const { mutate: handlePostInvitationSave } = usePostInvitationSave();

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

  const handleSave = () => {
    const formData = new FormData();
    formData.append(
      "invitation",
      new Blob([JSON.stringify(invitation)], { type: "application/json" })
    );
    if (cardImage) {
      formData.append("cardImage", cardImage);
    }

    if (photoImages && photoImages.length > 0) {
      Array.from(photoImages).forEach((file) => {
        formData.append("photoImages", file);
      });
    }

    handlePostInvitationSave(formData, {
      onSuccess: (response) => {
        //저장 후 결과로 받은 id값
        const id = response.invitationId;
        console.log("save", id);
        setInvitation((prevInvitation) => {
          prevInvitation.invitationId = id;
        });
        console.log("invitation", invitation);
        setIsShowModal(true);
      },
      onError: (error) => {
        console.error("등록 실패:", error);
      },
    });
  };
  console.log(invitation);
  return (
    <ToolBarProvider>
      <S.Container $isCheckComponent={isCheckComponent}>
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
              onClick={() => {
                setIsCheckComponent(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
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
            onLeftBtnClick={() => {
              setIsCheckComponent(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onRightBtnClick={handleSave}
          />
        )}
        {isShowModal && <CheckModal exitModal={() => setIsShowModal(false)} />}
      </S.Container>
    </ToolBarProvider>
  );
};

export default InvitationWritePage;
