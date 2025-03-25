import { TimeTableToolBarList } from "@/constants/invitationWrite/toolBar";
import { useToolBarContext } from "@/contexts/toolBarContext";
import useInvitationStore from "@/store/invitation";
import { Block } from "@/types/invitation";
import Add from "@assets/icons/화면GUI_Line/2020/Add_White.svg?react";
import * as S from "@styles/invitationWrite/blocks/invitationWriteTimeTableComponent";
import InvitationWriteTimeItem from "./InvitationWriteTimeItem";

interface InvitationWriteTextComponentProps {
  currentSequence: number;
  block: Block;
  setCurrentSequence: (sequence: number) => void;
  setBlocks: (blocks: Block[]) => void;
}

const InvitationWriteTimeTableComponent: React.FC<
  InvitationWriteTextComponentProps
> = ({ currentSequence, block, setCurrentSequence, setBlocks }) => {
  const { toolBarContent, setToolBarContent } = useToolBarContext();
  const { addTimeTableItem } = useInvitationStore();

  const handleFocus = () => {
    if (toolBarContent !== TimeTableToolBarList)
      setTimeout(() => {
        setToolBarContent(TimeTableToolBarList);
      }, 0);
  };

  const isFocus =
    currentSequence === block.sequence &&
    toolBarContent === TimeTableToolBarList;

  return (
    <S.InputContainer $isSequence={isFocus}>
      <S.Container
        onClick={(e) => {
          e.stopPropagation();
          handleFocus();
          setCurrentSequence(block.sequence);
        }}
      >
        <label>타임테이블</label>
        {Array.isArray(block.content) &&
          block.content &&
          block.content.map((item, index) => (
            <InvitationWriteTimeItem
              key={index}
              index={index}
              item={item}
              currentSequence={block.sequence}
              setBlocks={setBlocks}
            />
          ))}
        <S.AddButton
          onClick={(e) => {
            e.stopPropagation();
            const blockSequence = block.sequence;

            // 컴포넌트 활성화 및 현재 sequence 설정
            handleFocus();
            setCurrentSequence(blockSequence);
            addTimeTableItem(blockSequence);

            // 상태 업데이트
            setTimeout(() => {
              setBlocks([...useInvitationStore.getState().invitation.blocks]);
            }, 0);
          }}
        >
          <Add />
          추가
        </S.AddButton>
      </S.Container>
    </S.InputContainer>
  );
};

export default InvitationWriteTimeTableComponent;
