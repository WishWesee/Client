import { PhotoToolBarList } from "@/constants/invitationWrite/toolBar";
import { useToolBarContext } from "@/contexts/toolBarContext";
import { Block } from "@/types/invitation";
import * as S from "@styles/invitationWrite/blocks/invitationWriteDividerComponentStyle";

interface InvitationWritePhotoComponentProps {
  currentSequence: number;
  src: string;
  setCurrentSequence: (sequence: number) => void;
  block: Block;
}

const InvitationWritePhotoComponent: React.FC<
  InvitationWritePhotoComponentProps
> = ({ currentSequence, src, block, setCurrentSequence }) => {
  const { toolBarContent, setToolBarContent } = useToolBarContext();

  const isFocus =
    currentSequence === block.sequence && toolBarContent === PhotoToolBarList;

  const handleFocus = () => {
    if (toolBarContent !== PhotoToolBarList)
      setTimeout(() => {
        setToolBarContent(PhotoToolBarList);
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
        <img src={src} alt="첨부한 이미지" />
      </S.InputContainer>
    </S.Container>
  );
};

export default InvitationWritePhotoComponent;
