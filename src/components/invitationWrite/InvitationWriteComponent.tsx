import * as S from "@styles/invitationWrite/invitationWriteComponent";
import InvitationWriteCalendar from "./InvitationWriteCalendar";
import InvitationWriteLocation from "./InvitationWriteLocation";

const InvitationWriteComponent = () => {
  return (
    <S.Container>
      <S.TitleInput placeholder="제목을 입력하세요" />
      <InvitationWriteCalendar />
      <InvitationWriteLocation />
    </S.Container>
  );
};

export default InvitationWriteComponent;
