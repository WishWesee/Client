import { useInvitationQuery } from "@/api/invitation/getInvitation";
import ComingWrap from "@/components/invite/ComingWrap";
import KakaoWrap from "@/components/invite/KakaoWrap";
import PageFoldBtn from "@/components/invite/PageFoldBtn";
import ReviewWrap from "@/components/invite/ReviewWrap";
import SaveWrap from "@/components/invite/SaveWrap";
import ShareWrap from "@/components/invite/ShareWrap";
import TotheTopBtn from "@/components/invite/TotheTopBtn";
import VoteBox from "@/components/invite/VoteBox";
import useWMediaQuery from "@/hooks/useWMediaQuery";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const InvitationDetailPage = () => {
  const isLogin = true; //로그인되어있는 경우
  const isShareLink = false; //공유된 링크로 온건지 여부

  const { isMobile } = useWMediaQuery();

  const { id } = useParams();
  const invitationId = id ? parseInt(id) : 0;

  const { data, refetch } = useInvitationQuery(invitationId);
  const [isFold, setIsFold] = useState(false); //글이 접힌 상태인지 여부

  return (
    <Container>
      <TotheTopBtn />
      <VoteBox data={data} refetch={refetch} isLogin={isLogin} />
      <PageFoldBtn isFold={isFold} setIsFold={setIsFold} />
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
      <ReviewWrap
        id={data.invitationId}
        title={data.title}
        isOwner={data.owner}
      />
    </Container>
  );
};

export default InvitationDetailPage;

const Container = styled.div`
  margin-top: 54px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
