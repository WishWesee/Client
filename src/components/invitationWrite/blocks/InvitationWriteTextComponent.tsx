import {
  SubColorStyleBarList,
  SubTextStyleBarList,
  SubTextToolBarList,
  TextToolBarList,
} from "@/constants/invitationWrite/toolBar";
import { useToolBarContext } from "@/contexts/toolBarContext";
import useInvitationStore from "@/store/invitation";
import { Block } from "@/types/invitation";
import { getColor } from "@/utils/getColor";
import * as S from "@styles/invitationWrite/blocks/invitationWriteTextComponentStyle";
import { useEffect, useState } from "react";

interface InvitationWriteTextComponentProps {
  currentSequence: number;
  block: Block;
  setCurrentSequence: (sequence: number) => void;
  index: number;
}

const InvitationWriteTextComponent: React.FC<
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

  const [value, setValue] = useState(block.content || "");
  const [font, setFont] = useState(block.font || "");
  const [style, setStyle] = useState(block.styles || "");
  const [color, setColor] = useState(block.color || "");

  useEffect(() => {
    if (block.content) setValue(block.content);
  }, [block]);

  useEffect(() => {
    if (selectedTool === toolBarContent[0]) {
      setSubToolBarContent(SubTextToolBarList);
    } else if (selectedTool === toolBarContent[1]) {
      setSubToolBarContent(SubTextStyleBarList);
    } else {
      setSubToolBarContent(SubColorStyleBarList);
    }
  }, [selectedTool]);

  useEffect(() => {
    if (subSelectedTool) {
      const updatedProperties: Partial<Block> = {};

      switch (subSelectedTool.type) {
        case "Godic":
          updatedProperties.font = "--RegularContext";
          if (currentSequence === index) setFont("--RegularContext");
          break;
        case "Serif":
          updatedProperties.font = "--SerifContextRegular";
          if (currentSequence === index) setFont("--SerifContextRegular");
          break;
        case "Bold":
          updatedProperties.styles = "bold";
          if (currentSequence === index) setStyle("bold");
          break;
        case "Italic":
          updatedProperties.styles = "italic";
          if (currentSequence === index) setStyle("italic");
          break;
        case "TextLine":
          updatedProperties.styles = "strikethru";
          if (currentSequence === index) setStyle("strikethru");
          break;
        case "UnderLine":
          updatedProperties.styles = "underline";
          if (currentSequence === index) setStyle("underline");
          break;
        default:
          break;
      }

      console.log(updatedProperties);

      // 색 변경
      if (subToolBarContent === SubColorStyleBarList) {
        const newColor = getColor(subSelectedTool.type);
        updatedProperties.color = newColor;
        if (currentSequence === index) setColor(newColor);
      }

      if (Object.keys(updatedProperties).length > 0) {
        updateBlock(block.sequence, updatedProperties);
      }
    } else {
      const updatedProperties: Partial<Block> = {};
      updatedProperties.font = "--RegularContext";
      updatedProperties.styles = "";
      if (currentSequence === index) {
        setFont("--RegularContext");
        setStyle("");
      }
    }
  }, [subSelectedTool, subToolBarContent, block.sequence, updateBlock]);

  const isFocus =
    currentSequence === block.sequence && toolBarContent === TextToolBarList;

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;

    updateBlock(block.sequence, { content: newValue });
  };

  const handleFocus = () => {
    if (toolBarContent !== TextToolBarList)
      setTimeout(() => {
        setToolBarContent(TextToolBarList);
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
        <S.InputText
          placeholder="내용을 입력하세요"
          value={typeof value === "string" ? value : ""}
          onChange={handleInputChange}
          style={{
            font: `var(${font})`,
            color: color,
            fontWeight: style === "bold" ? 600 : "normal",
            transform: style === "italic" ? "skewX(-10deg)" : "none",
            textDecoration:
              style === "strikethru"
                ? "line-through"
                : style === "underline"
                ? "underline"
                : "none",
          }}
        >
          <span>{typeof value === "string" ? value : ""}</span>
        </S.InputText>
      </S.InputContainer>
    </S.Container>
  );
};

export default InvitationWriteTextComponent;
