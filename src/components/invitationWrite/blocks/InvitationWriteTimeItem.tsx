import useInvitationStore from "@/store/invitation";
import { Block, TimeTable } from "@/types/invitation";
import { formatTimeToCustomFormat } from "@/utils/calendar/formatCustomDateFromDate";
import ActiveTime from "@assets/icons/화면GUI_Full/2424_Activate/Time.svg?react";
import Time from "@assets/icons/화면GUI_Full/2424_Default/Time.svg?react";
import * as S from "@styles/invitationWrite/blocks/invitationWriteTimeItem";
import { useState } from "react";
import InvitationWriteTimeTableModal from "../calendar/InvitationWriteTimeTableModal";

interface InvitationWriteVoteItemProps {
  index: number;
  item: TimeTable;
  currentSequence: number;
  setBlocks: (newBlocks: Block[]) => void;
}

const InvitationWriteTimeItem: React.FC<InvitationWriteVoteItemProps> = ({
  index,
  item,
  currentSequence,
  setBlocks,
}) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const { invitation, updateTimeTableContent } = useInvitationStore();
  const [value, setValue] = useState(item.content ? item.content : "");

  // const formatTime =
  //   Array.isArray(invitation.blocks[currentSequence]?.content) &&
  //   invitation.blocks[currentSequence]?.content?.[index]?.time
  //     ? formatTimeToCustomFormat(
  //         invitation.blocks[currentSequence]?.content?.[index]?.time || ""
  //       )
  //     : "시간 선택";

  const formatTime =
    item.time !== "" ? formatTimeToCustomFormat(item.time) : "시간 선택";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    if (invitation.blocks[currentSequence]?.content) {
      updateTimeTableContent(currentSequence, index, newValue);
    }
  };

  return (
    <S.DateContainer>
      <S.ComponentContainer>
        <S.ButtonContainer>
          <S.SelectTimeButton onClick={() => setIsShowModal(!isShowModal)}>
            {formatTime === "시간 선택" ? (
              <>
                <Time />
                <S.ButtonText>{formatTime}</S.ButtonText>
              </>
            ) : (
              <>
                <ActiveTime />
                <S.ButtonText style={{ color: "var(--Black)" }}>
                  {formatTime}
                </S.ButtonText>
              </>
            )}
          </S.SelectTimeButton>

          <S.TimeInput
            placeholder="내용을 입력하세요"
            value={value}
            onChange={handleInputChange}
          />

          {/* Modal */}
          {isShowModal && (
            <InvitationWriteTimeTableModal
              handleCloseModal={() => setIsShowModal(false)}
              index={index}
              item={item}
              currentSequence={currentSequence}
              setBlocks={setBlocks}
            />
          )}
        </S.ButtonContainer>
      </S.ComponentContainer>
    </S.DateContainer>
  );
};

export default InvitationWriteTimeItem;
