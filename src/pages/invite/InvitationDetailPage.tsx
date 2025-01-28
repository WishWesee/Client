import * as S from "@styles/invite/InvitationDetailPageStyle";
import { useInvitationQuery } from "@/api/invitation/getInvitation";
import InvitationWriteHeader from "@/components/invitationWrite/InvitationWriteHeader";
import ComingWrap from "@/components/invite/ComingWrap";
import ContentWrap from "@/components/invite/ContentWrap";
import EmptyComponent from "@/components/invite/EmptyComponent";
//import KakaoWrap from "@/components/invite/KakaoWrap";
import LoadingComponent from "@/components/invite/LoadingComponent";
import ReviewWrap from "@/components/invite/ReviewWrap";
import SaveWrap from "@/components/invite/SaveWrap";
import ShareWrap from "@/components/invite/ShareWrap";
import TotheTopBtn from "@/components/invite/TotheTopBtn";
import useWMediaQuery from "@/hooks/useWMediaQuery";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const InvitationDetailPage = () => {
  const isLogin = false; //로그인되어있는 경우

  const { isMobile } = useWMediaQuery();
  const navigate = useNavigate();

  const { id } = useParams();
  const invitationId = id ? parseInt(id) : 0;

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

  const overlayOpacity = Math.max(1 - scrollY / 300, 0);

  const { data, refetch, isLoading, isError } =
    useInvitationQuery(invitationId);
  const invitationState = isLogin
    ? Number(data?.owner) || Number(data?.alreadySaved) * 2
    : 0;
  //링크 열람: 0, 내가 보낸 초대장: 1, 내가 받은 초대장 2

  if (isLoading) return <LoadingComponent text="초대장을 가져오고 있어요..." />;
  if (isError) return <EmptyComponent text="유효하지 않은 초대장입니다" />;

  return (
    <S.Container>
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
                  ? console.log("내가 보낸 초대장 삭제")
                  : console.log("내가 받은 초대장 삭제")
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
            {isMobile && <S.Overlay style={{ opacity: overlayOpacity }} />}
            <ContentWrap
              invitationState={invitationState}
              data={data}
              refetch={refetch}
              isLogin={isLogin}
            />
            {/* <KakaoWrap data={data} /> */}
            <ComingWrap id={data.invitationId} isLogin={isLogin} />
            {isMobile && invitationState === 0 && (
              <SaveWrap
                id={data.invitationId}
                isLogin={isLogin}
                refetch={refetch}
              />
            )}
            <ShareWrap
              id={data.invitationId}
              title={data.title}
              cardImage={data.cardImage}
              isAlreadySave={data.alreadySaved}
              isLogin={isLogin}
              isShareLink={invitationState === 0}
              refetch={refetch}
            />
            {invitationState !== 0 && (
              <ReviewWrap
                id={data.invitationId}
                title={data.title}
                isOwner={data.owner}
              />
            )}
          </S.BodyWrap>
        </>
      )}
    </S.Container>
  );
};

export default InvitationDetailPage;
