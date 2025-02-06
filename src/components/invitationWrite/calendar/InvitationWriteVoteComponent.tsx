import SlideButton from "@/components/button/Btn_Boolean";
import { VoteToolBarList } from "@/constants/invitationWrite/toolBar";
import { useToolBarContext } from "@/contexts/toolBarContext";
import useInvitationStore from "@/store/invitation";
import Add from "@assets/icons/화면GUI_Line/2020/Add_White.svg?react";
import Delete from "@assets/icons/화면GUI_Line/2020/Delete.svg?react";
import * as S from "@styles/invitationWrite/calendar/invitationWriteVoteComponentStyle";
import { useState } from "react";
import InvitationWriteVoteItem from "./InvitationWriteVoteItem";

const InvitationWriteVoteComponent = () => {
  const { invitation, setInvitation } = useInvitationStore();
  const [isMultiple, setIsMultiple] = useState(invitation.scheduleVoteMultiple);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const { toolBarContent, setToolBarContent } = useToolBarContext();

  const handleNewVote = () => {
    setInvitation((prevInvitation) => {
      prevInvitation.scheduleVotes[prevInvitation.scheduleVotes.length] = {
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
      };
    });
  };

  const handleDeleteVote = () => {
    if (currentIndex !== null) {
      setInvitation((invitation) => {
        invitation.scheduleVotes.splice(currentIndex, 1);
      });
    }
  };

  const handleSetMultiple = () => {
    setInvitation((invitation) => {
      invitation.scheduleVoteMultiple = !isMultiple;
    });
    setIsMultiple(!isMultiple);
  };

  const handleFocus = () => {
    if (toolBarContent !== VoteToolBarList)
      setTimeout(() => {
        setToolBarContent(VoteToolBarList);
      }, 0);
  };

  return (
    <S.Container
      onClick={(e) => {
        e.stopPropagation();
        handleFocus();
      }}
    >
      <S.TitleContainer>
        <S.Label>투표</S.Label>
        <S.SlideButtonContainer>
          <S.Text>복수 선택</S.Text>
          <SlideButton
            currentState={isMultiple}
            handleState={handleSetMultiple}
          />
        </S.SlideButtonContainer>
      </S.TitleContainer>
      {invitation.scheduleVotes.map((vote, index) => (
        <S.ItemContainer
          key={vote.endDate + index}
          isSelected={currentIndex === index}
          onClick={() => setCurrentIndex(index)}
        >
          <S.Index>{index + 1}</S.Index>
          <InvitationWriteVoteItem index={index} />
          {currentIndex === index && <Delete onClick={handleDeleteVote} />}
        </S.ItemContainer>
      ))}
      <S.AddButton onClick={handleNewVote}>
        <Add />
        추가
      </S.AddButton>
    </S.Container>
  );
};

export default InvitationWriteVoteComponent;
