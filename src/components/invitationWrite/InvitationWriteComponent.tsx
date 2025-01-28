import { NomalToolBarList } from "@/constants/invitationWrite/toolBar";
import { useToolBarContext } from "@/contexts/toolBarContext";
import * as S from "@styles/invitationWrite/invitationWriteComponent";
import InvitationWriteCalendar from "./InvitationWriteCalendar";
import InvitationWriteLocation from "./InvitationWriteLocation";

const InvitationWriteComponent = () => {
  const { setToolBarContent } = useToolBarContext();

  return (
    <S.Container onClick={() => setToolBarContent(NomalToolBarList)}>
      <S.TitleInput placeholder="제목을 입력하세요" />
      <InvitationWriteCalendar />
      <InvitationWriteLocation />
    </S.Container>
  );
};

export default InvitationWriteComponent;
