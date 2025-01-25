import { useInvitationQuery } from "@/api/invitation/getInvitation";
import VoteBox from "@/components/invite/VoteBox";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const InvitationDetailPage = () => {
  const { id } = useParams();
  const invitationId = id ? parseInt(id) : 0;

  const { data, refetch } = useInvitationQuery(invitationId);

  return (
    <Container>
      <VoteBox data={data} refetch={refetch} />
    </Container>
  );
};

export default InvitationDetailPage;

const Container = styled.div`
  margin-top: 54px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
