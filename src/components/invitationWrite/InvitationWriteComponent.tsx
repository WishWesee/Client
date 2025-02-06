import { NomalToolBarList } from "@/constants/invitationWrite/toolBar";
import { useToolBarContext } from "@/contexts/toolBarContext";
import useInvitationStore from "@/store/invitation";
import { Block } from "@/types/invitation";
import * as S from "@styles/invitationWrite/invitationWriteComponent";
import { useRef, useState } from "react";
import InvitationWriteCalendar from "./InvitationWriteCalendar";
import InvitationWriteLocation from "./InvitationWriteLocation";
import InvitationWriteBoxComponent from "./blocks/InvitationWriteBoxComponent";
import InvitationWriteDividerComponent from "./blocks/InvitationWriteDividerComponent";
import InvitationWritePhotoComponent from "./blocks/InvitationWritePhotoComponent";
import InvitationWriteTextComponent from "./blocks/InvitationWriteTextComponent";
import InvitationWriteTimeTableComponent from "./blocks/InvitationWriteTimeTableComponent";
import InvitationWriteVoteComponent from "./calendar/InvitationWriteVoteComponent";

const InvitationWriteComponent = ({
  currentSequence,
  setCurrentSequence,
  blocks,
  images,
}: {
  currentSequence: number;
  setCurrentSequence: (sequence: number) => void;
  blocks: Block[];
  images: File[];
}) => {
  const { setToolBarContent } = useToolBarContext();
  const { invitation, setInvitation } = useInvitationStore();
  const [placeholder, setPlaceholder] = useState("제목을 입력하세요");
  const titleInputRef = useRef<HTMLInputElement>(null);

  const newImages = [...images];

  const handleInputChange = () => {
    if (titleInputRef.current) {
      setInvitation((prevInvitation) => {
        prevInvitation.title = titleInputRef.current!.value;
      });
    }
  };

  // block 타입에 맞는 컴포넌트를 반환하는 함수
  const renderBlockContent = (block: any, index: number) => {
    switch (block.type) {
      case "divider":
        return (
          <InvitationWriteDividerComponent
            key={index}
            currentSequence={currentSequence}
            setCurrentSequence={setCurrentSequence}
            block={block}
          />
        );
      case "box":
        return (
          <InvitationWriteBoxComponent
            index={index}
            setCurrentSequence={setCurrentSequence}
            currentSequence={currentSequence}
            block={block}
          />
        );
      case "photo":
        const image = newImages.shift();

        return (
          image instanceof File && (
            <InvitationWritePhotoComponent
              key={index}
              src={URL.createObjectURL(image)}
              setCurrentSequence={setCurrentSequence}
              block={block}
              currentSequence={currentSequence}
            />
          )
        );

      case "text":
        return (
          <div style={{ width: "100%" }}>
            <InvitationWriteTextComponent
              key={index}
              currentSequence={currentSequence}
              setCurrentSequence={setCurrentSequence}
              block={block}
              index={index}
            />
          </div>
        );
      case "timeTable":
        return (
          <InvitationWriteTimeTableComponent
            key={index}
            currentSequence={currentSequence}
            setCurrentSequence={setCurrentSequence}
            block={block}
          />
        );
      default:
        return null;
    }
  };

  return (
    <S.Container onClick={() => setToolBarContent(NomalToolBarList)}>
      <S.TitleInput
        ref={titleInputRef}
        placeholder={placeholder}
        onFocus={() => setPlaceholder("")} // 클릭하면 사라짐
        onChange={handleInputChange}
      />
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
