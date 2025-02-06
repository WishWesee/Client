import { useChoiceStore } from "@/store/useChoiceStore"; // useChoiceStore import 추가
import { Block, InvitationState } from "@/types/invitation";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

// 초기 상태 정의
const initialState: InvitationState = {
  invitation: {
    invitationId: null,
    title: "",
    tempSaved: false,
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    userLocation: "",
    location: "",
    address: "",
    mapLink: "",
    latitude: 0,
    longitude: 0,
    mapViewType: 0,
    voteDeadline: "",
    attendanceSurveyEnabled: false,
    scheduleVoteMultiple: false,
    scheduleVoteClosed: false,
    attendanceSurveyClosed: false,
    blocks: [
      {
        sequence: 0,
        type: "text",
        content: "",
        font: "--RegularContext",
        color: "#000000",
        styles: "",
      },
    ],
    scheduleVotes: [
      // {
      //   startDate: "",
      //   startTime: "",
      //   endDate: "",
      //   endTime: "",
      // },
    ],
  },
  cardImage: null,
  photoImages: [],
  setInvitation: () => {}, // 초기 빈 함수
  setCardImage: () => {}, // 초기 빈 함수
  addImage: () => {},
  addBlock: () => {},
  updateBlock: () => {},
  updateTimeTable: () => {},
  updateTimeTableContent: () => {},
  resetInvitation: () => {},
};

const useInvitationStore = create<InvitationState>()(
  immer((set) => ({
    ...initialState,
    setInvitation: (update) =>
      set((state) => {
        update(state.invitation);
      }),
    setCardImage: (image: File | null) =>
      set((state) => {
        state.cardImage = image; // image를 File 객체로 처리
        const { setSelectedImage } = useChoiceStore.getState(); // useChoiceStore의 상태 업데이트
        setSelectedImage(image); // 전역 상태에서 선택된 이미지를 설정
      }),
    addImage: (image: File) =>
      set((state) => {
        state.photoImages.push(image);
      }),
    addBlock: (newBlock: Block) =>
      set((state) => {
        state.invitation.blocks.push(newBlock);
      }),
    updateBlock: (sequence: number, updatedProperties: Partial<Block>) =>
      set((state) => {
        const updatedBlocks = state.invitation.blocks.map((block) => {
          if (block.sequence === sequence) {
            return { ...block, ...updatedProperties };
          }
          return block;
        });

        state.invitation.blocks = updatedBlocks;
      }),
    updateTimeTable: (sequence: number, index: number, newTime: string) =>
      set((state) => {
        state.invitation.blocks = state.invitation.blocks.map((block) =>
          block.sequence === sequence
            ? {
                ...block,
                content: Array.isArray(block.content)
                  ? block.content.map((item, i) =>
                      i === index ? { ...item, time: newTime } : item
                    )
                  : block.content,
              }
            : block
        );
      }),
    updateTimeTableContent: (
      sequence: number,
      index: number,
      newContent: string
    ) =>
      set((state) => {
        state.invitation.blocks = state.invitation.blocks.map((block) => {
          if (block.sequence === sequence && Array.isArray(block.content)) {
            return {
              ...block,
              content: block.content.map((item, i) =>
                i === index ? { ...item, content: newContent } : item
              ),
            };
          }
          return block;
        });
      }),
    resetInvitation: () =>
      set(() => ({
        ...initialState,
      })),
  }))
);

export default useInvitationStore;
