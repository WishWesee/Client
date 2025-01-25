import { useInvitationQuery } from "@/api/invitation/getInvitation";
import KakaoWrap from "@/components/invite/KakaoWrap";
import TotheTopBtn from "@/components/invite/TotheTopBtn";
import VoteBox from "@/components/invite/VoteBox";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const InvitationDetailPage = () => {
  const { id } = useParams();
  const invitationId = id ? parseInt(id) : 0;

  const { data, refetch } = useInvitationQuery(invitationId);

  return (
    <Container>
      <TotheTopBtn />
      <VoteBox data={data} refetch={refetch} />
      <KakaoWrap data={data} />
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
