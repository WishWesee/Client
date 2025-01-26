import { useInvitationQuery } from "@/api/invitation/getInvitation";
import ComingWrap from "@/components/invite/ComingWrap";
import KakaoWrap from "@/components/invite/KakaoWrap";
import PageFoldBtn from "@/components/invite/PageFoldBtn";
import ShareWrap from "@/components/invite/ShareWrap";
import TotheTopBtn from "@/components/invite/TotheTopBtn";
import VoteBox from "@/components/invite/VoteBox";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const InvitationDetailPage = () => {
  const { id } = useParams();
  const invitationId = id ? parseInt(id) : 0;

  const { data, refetch } = useInvitationQuery(invitationId);
  const [isFold, setIsFold] = useState(false); //글이 접힌 상태인지 여부

  return (
    <Container>
      <TotheTopBtn />
      <VoteBox data={data} refetch={refetch} />
      <PageFoldBtn isFold={isFold} setIsFold={setIsFold} />
      <KakaoWrap data={data} />
      <ShareWrap
        id={data.invitationId}
        title={data.title}
        cardImage={data.cardImage}
      />
      <ComingWrap id={data.invitationId} />
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
