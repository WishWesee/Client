import { NomalToolBarList } from "@/constants/invitationWrite/toolBar";
import { useToolBarContext } from "@/contexts/toolBarContext";
import useInvitationStore from "@/store/invitation";
import * as S from "@styles/invitationWrite/invitationWriteComponent";
import { useState } from "react";
import InvitationWriteCalendar from "./InvitationWriteCalendar";
import InvitationWriteLocation from "./InvitationWriteLocation";
import InvitationWriteTextComponent from "./blocks/InvitationWriteTextComponent";
import InvitationWriteVoteComponent from "./calendar/InvitationWriteVoteComponent";

const InvitationWriteComponent = () => {
  const { setToolBarContent } = useToolBarContext();
  const { invitation } = useInvitationStore();
  const [currentSequence, setCurrentSequence] = useState(0);

  // block 타입에 맞는 컴포넌트를 반환하는 함수
  const renderBlockContent = (block: any) => {
    switch (block.type) {
      case "divider":
        return <hr />;
      case "box":
      // return (
      //   <ContentTextBox
      //     boxType={0}
      //     title={block.title}
      //     content={block.content}
      //   />
      // );
      case "photo":
        return <img src={block.image} alt="첨부한 이미지" />;
      case "text":
        return (
          <div
            style={{ width: "100%" }}
            onClick={() => setCurrentSequence(block.sequence)}
          >
            <InvitationWriteTextComponent
              currentSequence={currentSequence}
              block={block}
            />
          </div>
        );
      case "timeTable":
      // return <ContentTimeTable content={block.content} />;
      default:
        return null;
    }
  };

  return (
    <S.Container onClick={() => setToolBarContent(NomalToolBarList)}>
      <S.TitleInput placeholder="제목을 입력하세요" />
      <InvitationWriteCalendar />
      {invitation.voteDeadline !== "" && <InvitationWriteVoteComponent />}
      <InvitationWriteLocation />

      {/* Text */}
      <S.BlocksContainer>
        {invitation.blocks.map((block, _index) => renderBlockContent(block))}
      </S.BlocksContainer>
    </S.Container>
  );
};

export default InvitationWriteComponent;
