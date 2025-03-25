import CheckComponent from "@/components/invitationWrite/CheckComponent";
import InvitationWriteBottomButton from "@/components/invitationWrite/InvitationWriteBottomButton";
import InvitationWriteComponent from "@/components/invitationWrite/InvitationWriteComponent";
import InvitationWriteHeader from "@/components/invitationWrite/InvitationWriteHeader";
import InvitationWriteToolBar from "@/components/invitationWrite/InvitationWriteToolBar";
import AuthModal from "@/components/modal/AuthModal";
import CheckModal from "@/components/modal/CheckModal";
import { ToolBarProvider } from "@/contexts/toolBarContext";
import {
  usePostInvitation,
  usePostInvitationSave,
} from "@/hooks/write/usePostInvitation";
import useInvitationStore from "@/store/invitation";
import * as S from "@styles/invitationWrite/invitationWritePage";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const InvitationWritePage = () => {
  const { invitation, cardImage, photoImages, setInvitation } =
    useInvitationStore();

  const blocksRef = useRef(invitation.blocks || undefined);
  const imagesRef = useRef(photoImages || undefined);
  const [images, setImages] = useState(photoImages || undefined);
  const [isShowAuthModal, setIsShowAuthModal] = useState<boolean>(false);
  const [currentSequence, setCurrentSequence] = useState(0);
  const [isCheckComponent, setIsCheckComponent] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const navigate = useNavigate();
  const { mutate: handlePostInvitationSave } = usePostInvitationSave();
  const { mutate: postInvitation } = usePostInvitation();
  const { resetInvitation } = useInvitationStore();

  const getAuthTokenFromCookie = () => {
    return (
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("Authorization="))
        ?.split("=")[1] || null
    );
  };

  const isAuth = getAuthTokenFromCookie();

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    // blocksRef.current = [...invitation.blocks];
  }, [invitation.blocks]);

  useEffect(() => {
    setImages([...photoImages]);
  }, [photoImages]);

  // 임시 저장
  const handleSave = () => {
    if (!isAuth) {
      setIsShowAuthModal(true);
      return;
    }
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

  //완성된 초대장 저장
  const handleSaveInvite = () => {
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

    postInvitation(formData, {
      onSuccess: (response) => {
        //저장 후 결과로 받은 token값
        const token = response.invitationToken;
        navigate(`/invites/${token}`, {
          state: { isDone: true },
        });
        resetInvitation();
      },
      onError: (error) => {
        console.error("등록 실패:", error);
      },
    });
  };

  return (
    <ToolBarProvider>
      <S.Container $isCheckComponent={isCheckComponent}>
        <InvitationWriteHeader
          backText={isCheckComponent ? "이전" : "카드 선택"}
          buttonType={"저장"}
          isEnable={isSubmit}
          onLeftBtnClick={
            isCheckComponent
              ? () => {
                  setIsCheckComponent(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              : () => navigate("/choicecard")
          }
          onRightBtnClick={() => handleSave()}
        />
        {!isCheckComponent ? (
          <>
            <InvitationWriteToolBar
              currentSequence={currentSequence}
              setBlocks={setBlocksRef}
              setImages={setImagesRef}
            />
            <InvitationWriteComponent
              currentSequence={currentSequence}
              setBlocks={setBlocksRef}
              setCurrentSequence={setCurrentSequence}
              blocks={blocksRef.current}
              images={images}
            />
          </>
        ) : (
          <CheckComponent
            data={{
              invitation: invitation,
              cardImage: cardImage,
              photoImages: photoImages,
            }}
          />
        )}
        <InvitationWriteBottomButton
          isSubmit={isSubmit}
          text={isCheckComponent ? "완료" : "다음"}
          isAuth={isAuth}
          onClick={
            !isCheckComponent
              ? () => {
                  setIsCheckComponent(true);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              : handleSaveInvite
          }
        />

        {isShowModal && <CheckModal exitModal={() => setIsShowModal(false)} />}
        {isShowAuthModal && (
          <AuthModal
            exitModal={() => setIsShowAuthModal(false)}
            text={"로그인 후 저장할 수 있어요"}
          />
        )}
      </S.Container>
    </ToolBarProvider>
  );
};

export default InvitationWritePage;
