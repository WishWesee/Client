import { useInvitationQuery } from "@/api/invitation/getInvitation";
import InvitationWriteHeader from "@/components/invitationWrite/InvitationWriteHeader";
import ComingWrap from "@/components/invite/ComingWrap";
import ContentWrap from "@/components/invite/ContentWrap";
import EmptyComponent from "@/components/invite/EmptyComponent";
import KakaoWrap from "@/components/invite/KakaoWrap";
import LoadingComponent from "@/components/invite/LoadingComponent";
import ReviewWrap from "@/components/invite/ReviewWrap";
import SaveWrap from "@/components/invite/SaveWrap";
import ShareWrap from "@/components/invite/ShareWrap";
import TotheTopBtn from "@/components/invite/TotheTopBtn";
import useWMediaQuery from "@/hooks/useWMediaQuery";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const InvitationDetailPage = () => {
  const isLogin = false; //로그인되어있는 경우
  const isShareLink = true; //공유된 링크로 온건지 여부

  const { isMobile } = useWMediaQuery();
  const navigate = useNavigate();

  const { id } = useParams();
  const invitationId = id ? parseInt(id) : 0;

  const { data, refetch, isLoading, isError } =
    useInvitationQuery(invitationId);
  const invitationState = isLogin
    ? Number(data?.owner) || Number(data?.alreadySaved) * 2
    : 0;
  //링크 열람: 0, 내가 보낸 초대장: 1, 내가 받은 초대장 2
  const [isFold, setIsFold] = useState(false); //글이 접힌 상태인지 여부

  if (isLoading) return <LoadingComponent text="초대장을 가져오고 있어요..." />;
  if (isError) return <EmptyComponent text="유효하지 않은 초대장입니다" />;

  return (
    <Container>
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
          <TotheTopBtn />
          <ContentWrap
            invitationState={invitationState}
            data={data}
            refetch={refetch}
            isLogin={isLogin}
            isFold={isFold}
            setIsFold={setIsFold}
          />
          <KakaoWrap data={data} />
          <ComingWrap id={data.invitationId} isLogin={isLogin} />
          {isMobile && isShareLink && (
            <SaveWrap
              id={data.invitationId}
              isAlreadySave={data.alreadySaved}
              isLogin={isLogin}
            />
          )}
          <ShareWrap
            id={data.invitationId}
            title={data.title}
            cardImage={data.cardImage}
            isAlreadySave={data.alreadySaved}
            isLogin={isLogin}
            isShareLink={isShareLink}
          />
          {invitationState !== 0 && (
            <ReviewWrap
              id={data.invitationId}
              title={data.title}
              isOwner={data.owner}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default InvitationDetailPage;

const Container = styled.div`
  margin-top: 54px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--Grey5);
  gap: 20px;
`;
