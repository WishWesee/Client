import {
  SubColorStyleBarList,
  SubTextStyleBarList,
  SubTextToolBarList,
  TextToolBarList,
} from "@/constants/invitationWrite/toolBar";
import { useToolBarContext } from "@/contexts/toolBarContext";
import { Block } from "@/types/invitation";
import { getColor } from "@/utils/getColor";

import * as S from "@styles/invitationWrite/blocks/invitationWriteTextComponentStyle";
import { useEffect, useState } from "react";

interface InvitationWriteTextComponentProps {
  currentSequence: number;
  block: Block;
}

const InvitationWriteTextComponent: React.FC<
  InvitationWriteTextComponentProps
> = ({ currentSequence, block }) => {
  const {
    selectedTool,
    subSelectedTool,
    toolBarContent,
    subToolBarContent,
    setToolBarContent,
    setSubToolBarContent,
  } = useToolBarContext();
  const [value, setValue] = useState("");
  const [font, setFont] = useState("");
  const [style, setStyle] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    if (selectedTool === toolBarContent[0]) {
      setSubToolBarContent(SubTextToolBarList);
    } else if (selectedTool === toolBarContent[1]) {
      setSubToolBarContent(SubTextStyleBarList);
    } else {
      setSubToolBarContent(SubColorStyleBarList);
    }
  }, [selectedTool]);

  // subTool상태에 따른 폰트 시스템 변경
  useEffect(() => {
    if (subSelectedTool) {
      switch (subSelectedTool.type) {
        case "Godic":
          setFont("--RegularContext");
          block.font = "--RegularContext";
          break;
        case "Serif":
          setFont("--SerifContextRegular");
          block.font = "--SerifContextRegular";
          break;
        case "Bold":
          setStyle("bold");
          block.styles = "bold";
          break;
        case "Italic":
          setStyle("italic");
          block.styles = "italic";
          break;
        case "TextLine":
          setStyle("strikethru");
          block.styles = "strikethru";
          break;
        case "UnderLine":
          setStyle("underline");
          block.styles = "underline";
          break;
        default:
          break;
      }
      if (subToolBarContent === SubColorStyleBarList) {
        setColor(getColor(subSelectedTool.type));
        block.color = getColor(subSelectedTool.type);
      }
    }
  }, [subSelectedTool]);

  const isFocus =
    currentSequence === block.sequence && toolBarContent === TextToolBarList;

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
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
      }}
    >
      <S.InputContainer $isSequence={isFocus}>
        <S.InputText
          placeholder="내용을 입력하세요"
          value={value}
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
          <span>{value}</span>
        </S.InputText>
      </S.InputContainer>
    </S.Container>
  );
};

export default InvitationWriteTextComponent;
