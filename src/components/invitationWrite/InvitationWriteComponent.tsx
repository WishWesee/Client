import { NomalToolBarList } from "@/constants/invitationWrite/toolBar";
import { useToolBarContext } from "@/contexts/toolBarContext";
import useInvitationStore from "@/store/invitation";
import { Block } from "@/types/invitation";
import * as S from "@styles/invitationWrite/invitationWriteComponent";
import InvitationWriteCalendar from "./InvitationWriteCalendar";
import InvitationWriteLocation from "./InvitationWriteLocation";
import InvitationWriteTextComponent from "./blocks/InvitationWriteTextComponent";
import InvitationWriteVoteComponent from "./calendar/InvitationWriteVoteComponent";

const InvitationWriteComponent = ({
  currentSequence,
  setCurrentSequence,
  blocks,
}: {
  currentSequence: number;
  setCurrentSequence: (sequence: number) => void;
  blocks: Block[];
}) => {
  const { setToolBarContent } = useToolBarContext();
  const { invitation } = useInvitationStore();

  // block 타입에 맞는 컴포넌트를 반환하는 함수
  const renderBlockContent = (block: any, index: number) => {
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
          <div style={{ width: "100%" }}>
            <InvitationWriteTextComponent
              currentSequence={currentSequence}
              setCurrentSequence={setCurrentSequence}
              block={block}
              index={index}
            />
          </div>
        );
      case "timeTable":
      // return <ContentTimeTable content={block.content} />;
      default:
        return null;
    }
  };

  console.log("w", blocks);

  return (
    <S.Container onClick={() => setToolBarContent(NomalToolBarList)}>
      <S.TitleInput placeholder="제목을 입력하세요" />
      <InvitationWriteCalendar />
      {invitation.voteDeadline !== "" && <InvitationWriteVoteComponent />}
      <InvitationWriteLocation />

      {/* Text */}
      <S.BlocksContainer>
        {blocks.map((block, index) => renderBlockContent(block, index))}
      </S.BlocksContainer>
    </S.Container>
  );
};

export default InvitationWriteComponent;
