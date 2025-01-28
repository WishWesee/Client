import * as S from "@styles/invite/InvitationDetailPageStyle";
import { useInvitationQuery } from "@/api/invitation/getInvitation";
import InvitationWriteHeader from "@/components/invitationWrite/InvitationWriteHeader";
import ComingWrap from "@/components/invite/ComingWrap";
import ContentWrap from "@/components/invite/ContentWrap";
import EmptyComponent from "@/components/invite/EmptyComponent";
import LoadingComponent from "@/components/invite/LoadingComponent";
import ReviewWrap from "@/components/invite/ReviewWrap";
import SaveWrap from "@/components/invite/SaveWrap";
import ShareWrap from "@/components/invite/ShareWrap";
import TotheTopBtn from "@/components/invite/TotheTopBtn";
import useWMediaQuery from "@/hooks/useWMediaQuery";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteSentInvite } from "@/api/invitation/deleteSentInvite";
import { deleteReceivedInvite } from "@/api/invitation/deleteReceivedInvite";
import TwoBtnModal from "@/components/modal/TwoBtnModal";
//import KakaoWrap from "@/components/invite/KakaoWrap";
//import InviteBottom from "@/components/invite/InviteBottom";

const InvitationDetailPage = () => {
  const isLogin = false; //로그인되어있는 경우

  const { isMobile } = useWMediaQuery();
  const navigate = useNavigate();

  const { id } = useParams();
  const invitationId = id ? parseInt(id) : 0;

  const [isDeleteSentModal, setIsDeleteSentModal] = useState(false); //보낸 메시지 삭제 모달
  const [isDeleteReceivedModal, setIsDeleteReceivedModal] = useState(false); //받은 메시지 삭제 모달

  //애니메이션 스크롤
  const [scrollY, setScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    updateScreenWidth();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  const { data, refetch, isLoading, isError } =
    useInvitationQuery(invitationId);
  const invitationState = isLogin
    ? Number(data?.owner) || Number(data?.alreadySaved) * 2
    : 0;
  //링크 열람: 0, 내가 보낸 초대장: 1, 내가 받은 초대장 2

  if (isLoading) return <LoadingComponent text="초대장을 가져오고 있어요..." />;
  if (isError) return <EmptyComponent text="유효하지 않은 초대장입니다" />;

  //내가 보낸 초대장 삭제 함수
  const handleDeleteSentInvite = async () => {
    if (!data?.invitationId) return;

    await deleteSentInvite(data?.invitationId);
    setIsDeleteSentModal(false);
    refetch();
    navigate("/invite/sent");
  };

  //내가 받은 초대장 삭제 함수
  const handleDeleteReceivedInvite = async () => {
    if (!data?.invitationId) return;

    await deleteReceivedInvite(data?.invitationId);
    setIsDeleteReceivedModal(false);
    refetch();
    navigate("/invite/received");
  };

  return (
    <S.Container $isHeader={invitationState !== 0}>
      {data && (
        <>
          {invitationState !== 0 && (
            <InvitationWriteHeader
              backText="이전"
              buttonType="삭제"
              onLeftBtnClick={() =>
                invitationState === 1
                  ? navigate("/invite/sent")
                  : navigate("/invite/received")
              }
              onRightBtnClick={() =>
                invitationState === 1
                  ? setIsDeleteSentModal(true)
                  : setIsDeleteReceivedModal(true)
              }
            />
          )}
          {isMobile && (
            <S.FadeInImage
              src={data.cardImage}
              alt="카드 이미지"
              $scrollY={scrollY}
              $screenWidth={screenWidth}
            />
          )}
          <TotheTopBtn />
          <S.BodyWrap $screenWidth={screenWidth}>
            {isMobile && (
              <S.Overlay style={{ opacity: Math.max(1 - scrollY / 300, 0) }} />
            )}
            <ContentWrap
              invitationState={invitationState}
              data={data}
              refetch={refetch}
              isLogin={isLogin}
            />
            {/* <KakaoWrap data={data} /> */}
            {data.attendanceSurveyEnabled && (
              <ComingWrap
                id={data.invitationId}
                isLogin={isLogin}
                isReview={data.canWriteFeedback}
              />
            )}
            {isMobile && invitationState === 0 && (
              <SaveWrap
                id={data.invitationId}
                isLogin={isLogin}
                refetch={refetch}
              />
            )}
            {isMobile && (
              <ShareWrap
                id={data.invitationId}
                title={data.title}
                cardImage={data.cardImage}
                isAlreadySave={data.alreadySaved}
                isLogin={isLogin}
                isShareLink={invitationState === 0}
                refetch={refetch}
              />
            )}
            {invitationState !== 0 && data.canWriteFeedback && (
              <ReviewWrap
                id={data.invitationId}
                title={data.title}
                isOwner={data.owner}
              />
            )}
            {/* <InviteBottom
              btnText="완료"
              onBtnClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              isDisabled={false}
              isCheck={false}
              onCheckClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            /> */}
          </S.BodyWrap>
          {isDeleteSentModal && (
            <TwoBtnModal
              text="초대장을 삭제하시겠습니까?"
              leftBtnText="취소"
              rightBtnText="삭제"
              color="red"
              onLeftClick={() => {
                setIsDeleteSentModal(false);
              }}
              onRightClick={handleDeleteSentInvite}
            />
          )}
          {isDeleteReceivedModal && (
            <TwoBtnModal
              text="초대장을 삭제하시겠습니까?"
              leftBtnText="취소"
              rightBtnText="삭제"
              color="red"
              onLeftClick={() => {
                setIsDeleteReceivedModal(false);
              }}
              onRightClick={handleDeleteReceivedInvite}
            />
          )}
        </>
      )}
    </S.Container>
  );
};

export default InvitationDetailPage;
