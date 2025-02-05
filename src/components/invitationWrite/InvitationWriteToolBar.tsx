import {
  DeviderToolBarList,
  NomalToolBarList,
  PhotoToolBarList,
  SubTextToolBarList,
  TextToolBarList,
} from "@/constants/invitationWrite/toolBar";
import { useToolBarContext } from "@/contexts/toolBarContext";
import useInvitationStore from "@/store/invitation";
import { Block } from "@/types/invitation";
import ArrowBottom from "@assets/icons/화면GUI_Full/3232/Arrow_Bottom.svg?react";
import ArrowTop from "@assets/icons/화면GUI_Full/3232/Arrow_Top.svg?react";
import Delete from "@assets/icons/화면GUI_Full/3232/Delete.svg?react";
import Arrow from "@assets/icons/화면GUI_Line/2020/Arrow_Left.svg?react";
import * as S from "@styles/invitationWrite/invitationWriteToolBar";
import { useRef } from "react";

const InvitationWriteToolBar = ({
  currentSequence,
  setBlocks,
  setImages,
}: {
  currentSequence: number;
  setBlocks: (newBlocks: Block[]) => void;
  setImages: (newImages: File[]) => void;
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

  const { invitation, setInvitation, addBlock, addImage } =
    useInvitationStore();
  const selectedToolRef = useRef(selectedTool || undefined);

  const isSubToolBar = selectedTool && toolBarContent === TextToolBarList;

  const isArrowBar =
    toolBarContent === TextToolBarList ||
    toolBarContent === DeviderToolBarList ||
    toolBarContent === PhotoToolBarList;

  const handleSubTool = (index: number) => {
    setSubSelectedTool(index);
    if (subToolBarContent === SubTextToolBarList) {
      toolBarContent[0] = subToolBarContent[index];
    }
  };

  // 블럭 이동
  const moveBlock = (direction: "forward" | "backward") => {
    setInvitation((prevInvitation) => {
      const newArr = [...prevInvitation.blocks]; // 배열 복사

      if (direction === "forward" && currentSequence > 0) {
        const [movedBlock] = newArr.splice(currentSequence, 1);
        newArr.splice(currentSequence - 1, 0, movedBlock);
      } else if (
        direction === "backward" &&
        currentSequence < newArr.length - 1
      ) {
        const [movedBlock] = newArr.splice(currentSequence, 1);
        newArr.splice(currentSequence + 1, 0, movedBlock);
      }

      // sequence 값 재설정
      newArr.forEach((block, index) => {
        block.sequence = index;
      });

      return {
        ...prevInvitation,
        blocks: newArr,
      };
    });

    setTimeout(() => {
      setBlocks([...useInvitationStore.getState().invitation.blocks]);
    }, 0);
  };

  // 블럭 삭제
  const handleDeleteBlock = () => {
    console.log("삭제 전:", invitation.blocks);

    setInvitation((prevInvitation) => {
      const updatedBlocks = prevInvitation.blocks.filter(
        (block) => block.sequence !== currentSequence
      );

      // sequence 값 재정렬
      const reindexedBlocks = updatedBlocks.map((block, index) => ({
        ...block,
        sequence: index,
      }));

      console.log("삭제 후:", reindexedBlocks);
      prevInvitation.blocks = structuredClone(reindexedBlocks);
    });

    setTimeout(() => {
      setBlocks([...useInvitationStore.getState().invitation.blocks]);
    }, 0);
  };

  // 기본 툴바 버튼 클릭시
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
          addBlock({
            sequence: invitation.blocks.length,
            type: "divider",
          });
          setTimeout(() => {
            setBlocks([...useInvitationStore.getState().invitation.blocks]);
          }, 0);
          break;
        case "photo":
          const triggerFileUpload = () => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";

            // 파일이 선택되었을 때 실행되는 이벤트 핸들러
            input.onchange = (event) => {
              const file = (event.target as HTMLInputElement).files?.[0];
              if (file) {
                addImage(file); // 기존 파일 배열에 새 파일 추가
                addBlock({
                  sequence: invitation.blocks.length,
                  type: "photo",
                });
                setTimeout(() => {
                  setImages([...useInvitationStore.getState().photoImages]);
                }, 0);
              }
            };
            // 파일 선택 창을 열도록 클릭 트리거
            input.click();
          };
          // 파일 업로드 실행
          triggerFileUpload();
          break;

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
        <S.ToolButtonContainer>
          {toolBarContent !== NomalToolBarList && (
            <Arrow onClick={() => setToolBarContent(NomalToolBarList)} />
          )}
          {toolBarContent.map((item, index) => (
            <S.ToolButton key={index} onClick={() => handleToolButton(index)}>
              {selectedTool === item ? (
                <item.activeIcon />
              ) : (
                <item.defaultIcon />
              )}
              {item.title && (
                <S.ToolButtonText $isActive={selectedTool === item}>
                  {item.title}
                </S.ToolButtonText>
              )}
            </S.ToolButton>
          ))}
        </S.ToolButtonContainer>
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
