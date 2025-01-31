import { InvitationState } from "@/types/invitation";
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
    location: "",
    address: "",
    mapLink: "",
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
      {
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
      },
    ],
  },
  cardImage: "string",
  photoImages: ["string"],
  setInvitation: () => {}, // 초기 빈 함수
  setCardImage: () => {}, // 초기 빈 함수
  setPhotoImages: () => {}, // 초기 빈 함수
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
  }))
);

export default useInvitationStore;
