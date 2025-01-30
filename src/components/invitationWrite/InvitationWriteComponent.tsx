import { NomalToolBarList } from "@/constants/invitationWrite/toolBar";
import { useToolBarContext } from "@/contexts/toolBarContext";
import useInvitationStore from "@/store/invitation";
import * as S from "@styles/invitationWrite/invitationWriteComponent";
import InvitationWriteCalendar from "./InvitationWriteCalendar";
import InvitationWriteLocation from "./InvitationWriteLocation";
import InvitationWriteVoteComponent from "./calendar/InvitationWriteVoteComponent";

const InvitationWriteComponent = () => {
  const { setToolBarContent } = useToolBarContext();
  const { invitation } = useInvitationStore();

  return (
    <S.Container onClick={() => setToolBarContent(NomalToolBarList)}>
      <S.TitleInput placeholder="제목을 입력하세요" />
      <InvitationWriteCalendar />
      {invitation.voteDeadline !== "" && <InvitationWriteVoteComponent />}
      <InvitationWriteLocation />
    </S.Container>
  );
};

export default InvitationWriteComponent;
