import { Block, InvitationState } from "@/types/invitation";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

// 초기 상태 정의
const initialState: InvitationState = {
  invitation: {
    invitationId: 0,
    title: "",
    tempSaved: true,
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
    attendanceSurveyEnabled: true,
    scheduleVoteMultiple: true,
    scheduleVoteClosed: true,
    attendanceSurveyClosed: true,
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
  cardImage: "string",
  photoImages: ["string"],
  setInvitation: () => {}, // 초기 빈 함수
  setCardImage: () => {}, // 초기 빈 함수
  setPhotoImages: () => {},
  addBlock: () => {},
  updateBlock: () => {},
};

const useInvitationStore = create<InvitationState>()(
  immer((set) => ({
    ...initialState,
    setInvitation: (update) =>
      set((state) => {
        update(state.invitation);
      }),
    setCardImage: (image) =>
      set((state) => {
        state.cardImage = image;
      }),
    setPhotoImages: (images) =>
      set((state) => {
        state.photoImages = images;
      }),
    addBlock: (newBlock) =>
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
        console.log(state.invitation.blocks);
      }),
  }))
);

export default useInvitationStore;
