import * as S from "@styles/invitationWrite/invitationWriteComponent";
import InvitationWriteCalendar from "./InvitationWriteCalendar";

const InvitationWriteComponent = () => {
  return (
    <S.Container>
      <S.TitleInput placeholder="제목을 입력하세요" />
      <InvitationWriteCalendar />
    </S.Container>
  );
};

export default InvitationWriteComponent;
