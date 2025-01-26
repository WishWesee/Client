import { useInvitationQuery } from "@/api/invitation/getInvitation";
import ComingWrap from "@/components/invite/ComingWrap";
import KakaoWrap from "@/components/invite/KakaoWrap";
import PageFoldBtn from "@/components/invite/PageFoldBtn";
import SaveWrap from "@/components/invite/SaveWrap";
import ShareWrap from "@/components/invite/ShareWrap";
import TotheTopBtn from "@/components/invite/TotheTopBtn";
import VoteBox from "@/components/invite/VoteBox";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const InvitationDetailPage = () => {
  const isLogin = true; //로그인되어있는 경우

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
      <SaveWrap
        id={data.invitationId}
        isAlreadySave={data.alreadySaved}
        isLogin={isLogin}
      />
      <ShareWrap
        id={data.invitationId}
        title={data.title}
        cardImage={data.cardImage}
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
