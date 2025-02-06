import {
  BoxToolBarList,
  SubBoxStyleBarList,
} from "@/constants/invitationWrite/toolBar";
import { BoxColor } from "@/constants/invite";
import { useToolBarContext } from "@/contexts/toolBarContext";
import useInvitationStore from "@/store/invitation";
import * as S from "@/styles/invitationWrite/blocks/invitationWriteBoxComponent";
import { Block } from "@/types/invitation";
import { useEffect, useState } from "react";

type Props = {
  currentSequence: number;
  setCurrentSequence: (sequence: number) => void;
  block: Block;
  index: number;
};

const InvitationWriteBoxComponent = ({
  currentSequence,
  setCurrentSequence,
  block,
  index,
}: Props) => {
  const {
    selectedTool,
    toolBarContent,
    subSelectedTool,
    subToolBarContent,
    setToolBarContent,
    setSubToolBarContent,
  } = useToolBarContext();
  const [titleValue, setTitleValue] = useState(block.title || "");
  const [value, setValue] = useState(block.content || "");
  const [color, setColor] = useState<number>(
    block.colorCode ? block.colorCode : 0
  );

  console.log(color);
  const { updateBlock } = useInvitationStore();

  const isFocus =
    currentSequence === block.sequence && toolBarContent === BoxToolBarList;

  useEffect(() => {
    if (selectedTool === toolBarContent[0]) {
      setSubToolBarContent(SubBoxStyleBarList);
    }
  }, [selectedTool]);

  useEffect(() => {
    if (subToolBarContent === SubBoxStyleBarList) {
      updateBlock(currentSequence, {
        colorCode: Number(subSelectedTool?.type),
      });
      if (currentSequence === index) setColor(Number(subSelectedTool?.type));
    }
  }, [subSelectedTool]);

  const handleFocus = () => {
    if (toolBarContent !== BoxToolBarList)
      setTimeout(() => {
        setToolBarContent(BoxToolBarList);
      }, 0);
  };

  const handleTitleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;
    setTitleValue(newValue);
    updateBlock(block.sequence, { title: newValue });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;

    updateBlock(block.sequence, { content: newValue });
  };

  return (
    <S.InputContainer
      $isSequence={isFocus}
      onClick={(e) => {
        e.stopPropagation();
        handleFocus();
        setCurrentSequence(block.sequence);
      }}
    >
      <S.TextBoxWrap
        style={{
          backgroundColor: BoxColor[color].bgColor,
          border: BoxColor[color].border,
        }}
      >
        <S.TitleInput
          placeholder="제목을 입력하세요"
          value={titleValue}
          onChange={handleTitleInputChange}
        />
        <hr />
        <S.ContentInput
          placeholder="내용을 입력하세요"
          value={typeof value === "string" ? value : undefined}
          onChange={handleInputChange}
        />
      </S.TextBoxWrap>
    </S.InputContainer>
  );
};

export default InvitationWriteBoxComponent;
