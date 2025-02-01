import {
  NomalToolBarList,
  SubTextToolBarList,
  TextToolBarList,
} from "@/constants/invitationWrite/toolBar";
import { useToolBarContext } from "@/contexts/toolBarContext";
import useInvitationStore from "@/store/invitation";
import { Block } from "@/types/invitation";
import ArrowTop from "@assets/icons/화면GUI_Full/3232/Arrow_Top.svg?react";
import ArrowBottom from "@assets/icons/화면GUI_Full/3232/Arrow_bottom.svg?react";
import Delete from "@assets/icons/화면GUI_Full/3232/Delete.svg?react";
import Arrow from "@assets/icons/화면GUI_Line/2020/Arrow_Left.svg?react";
import * as S from "@styles/invitationWrite/invitationWriteToolBar";
import { useRef } from "react";

const InvitationWriteToolBar = ({
  currentSequence,
  setBlocks,
}: {
  currentSequence: number;
  setBlocks: (newBlocks: Block[]) => void;
}) => {
  const {
    selectedTool,
    subSelectedTool,
    setSelectedTool,
    setSubSelectedTool,
    toolBarContent,
    setToolBarContent,
    subToolBarContent,
  } = useToolBarContext();

  const { invitation, setInvitation, addBlock } = useInvitationStore();
  const selectedToolRef = useRef(selectedTool || undefined);

  const isSubToolBar = selectedTool && toolBarContent === TextToolBarList;

  const isArrowBar = toolBarContent === TextToolBarList;

  const handleSubTool = (index: number) => {
    setSubSelectedTool(index);
    if (subToolBarContent === SubTextToolBarList) {
      toolBarContent[0] = subToolBarContent[index];
    }
  };

  const moveBlock = (direction: "forward" | "backward") => {
    const newArr = [...invitation.blocks];

    if (direction === "forward" && currentSequence > 0) {
      // 앞쪽 요소와 swap
      [newArr[currentSequence], newArr[currentSequence - 1]] = [
        newArr[currentSequence - 1],
        newArr[currentSequence],
      ];
    } else if (
      direction === "backward" &&
      currentSequence < newArr.length - 1
    ) {
      // 뒤쪽 요소와 swap
      [newArr[currentSequence], newArr[currentSequence + 1]] = [
        newArr[currentSequence + 1],
        newArr[currentSequence],
      ];
    }
    invitation.blocks = newArr;
  };

  const handleDeleteBlock = () => {
    setInvitation((invitation) => {
      invitation.scheduleVotes.splice(currentSequence, 1);
    });
  };
  const handleToolButton = (index: number) => {
    setSelectedTool(index);
    selectedToolRef.current = toolBarContent[index];

    if (toolBarContent === NomalToolBarList) {
      switch (selectedToolRef.current.type) {
        case "Text":
          addBlock({
            sequence: invitation.blocks.length,
            type: "text",
            content: "",
            font: "--RegularContext",
            color: "#000000",
            styles: "",
          });
          setTimeout(() => {
            setBlocks([...useInvitationStore.getState().invitation.blocks]);
          }, 0);
          break;
        case "Line":
        // return (
        //   <ContentTextBox
        //     boxType={0}
        //     title={block.title}
        //     content={block.content}
        //   />
        // );
        // case "Image":
        //   return <img src={block.image} alt="첨부한 이미지" />;
        // case "Box":
        //   return (
        //     <div
        //       style={{ width: "100%" }}
        //       onClick={() => setCurrentSequence(block.sequence)}
        //     >
        //       <InvitationWriteTextComponent
        //         currentSequence={currentSequence}
        //         block={block}
        //       />
        //     </div>
        //   );
        case "TimeTable":
        // return <ContentTimeTable content={block.content} />;
        default:
          return null;
      }
    }
  };

  return (
    <S.Container>
      <S.ToolContainer>
        {/* "<" 구현 */}
        {toolBarContent !== NomalToolBarList && (
          <Arrow onClick={() => setToolBarContent(NomalToolBarList)} />
        )}
        {toolBarContent.map((item, index) => (
          <S.ToolButton key={index} onClick={() => handleToolButton(index)}>
            {selectedTool === item ? <item.activeIcon /> : <item.defaultIcon />}
            {item.title && (
              <S.ToolButtonText $isActive={selectedTool === item}>
                {item.title}
              </S.ToolButtonText>
            )}
          </S.ToolButton>
        ))}

        {/* 블럭 이동 구현 */}
        {isArrowBar && (
          <S.ArrowContainer>
            <ArrowBottom onClick={() => moveBlock("backward")} />
            <ArrowTop onClick={() => moveBlock("forward")} />
            <Delete onClick={() => handleDeleteBlock()} />
          </S.ArrowContainer>
        )}
      </S.ToolContainer>

      {isSubToolBar && (
        <S.SubToolContainer>
          {subToolBarContent.map((item, index) => (
            <S.ToolButton key={index} onClick={() => handleSubTool(index)}>
              {subSelectedTool === item ? (
                <item.activeIcon />
              ) : (
                <item.defaultIcon />
              )}
              {item.title && (
                <S.ToolButtonText $isActive={subSelectedTool === item}>
                  {item.title}
                </S.ToolButtonText>
              )}
            </S.ToolButton>
          ))}
        </S.SubToolContainer>
      )}
    </S.Container>
  );
};

export default InvitationWriteToolBar;
