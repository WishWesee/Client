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
  index: number;
}

const InvitationWriteTimeTableComponent: React.FC<
  InvitationWriteTextComponentProps
> = ({ currentSequence, block, setCurrentSequence, index }) => {
  const {
    selectedTool,
    subSelectedTool,
    toolBarContent,
    subToolBarContent,
    setToolBarContent,
    setSubToolBarContent,
  } = useToolBarContext();

  const { updateBlock } = useInvitationStore();

  const handleFocus = () => {
    if (toolBarContent !== TimeTableToolBarList)
      setTimeout(() => {
        setToolBarContent(TimeTableToolBarList);
      }, 0);
  };

  const handleNewTime = () => {
    updateBlock(block.sequence, {
      content: Array.isArray(block.content)
        ? [...block.content, { time: "", content: "" }]
        : [{ time: "", content: "" }],
    });
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
          block.content.map((item, index) => (
            <InvitationWriteTimeItem
              index={index}
              item={item}
              currentSequence={currentSequence}
            />
          ))}
        <S.AddButton onClick={handleNewTime}>
          <Add />
          추가
        </S.AddButton>
      </S.Container>
    </S.InputContainer>
  );
};

export default InvitationWriteTimeTableComponent;
