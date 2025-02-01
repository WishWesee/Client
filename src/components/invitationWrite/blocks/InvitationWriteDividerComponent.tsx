import { DeviderToolBarList } from "@/constants/invitationWrite/toolBar";
import { useToolBarContext } from "@/contexts/toolBarContext";
import { Block } from "@/types/invitation";
import * as S from "@styles/invitationWrite/blocks/invitationWriteDividerComponentStyle";

interface InvitationWriteTextComponentProps {
  currentSequence: number;
  block: Block;
  setCurrentSequence: (sequence: number) => void;
}

const InvitationWriteTextComponent: React.FC<
  InvitationWriteTextComponentProps
> = ({ currentSequence, block, setCurrentSequence }) => {
  const { toolBarContent, setToolBarContent } = useToolBarContext();

  const isFocus =
    currentSequence === block.sequence && toolBarContent === DeviderToolBarList;

  const handleFocus = () => {
    if (toolBarContent !== DeviderToolBarList)
      setTimeout(() => {
        setToolBarContent(DeviderToolBarList);
      }, 0);
  };

  return (
    <S.Container
      onClick={(e) => {
        e.stopPropagation();
        handleFocus();
        setCurrentSequence(block.sequence);
      }}
    >
      <S.InputContainer $isSequence={isFocus}>
        <hr />
      </S.InputContainer>
    </S.Container>
  );
};

export default InvitationWriteTextComponent;
