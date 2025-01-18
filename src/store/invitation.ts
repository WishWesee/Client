import { InvitationState } from "@/types/invitation";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

// 초기 상태 정의
const initialState: InvitationState = {
  invitation: {
    invitationId: 0,
    title: "string",
    tempSaved: true,
    startDate: "2024-12-30",
    startTime: "",
    endDate: "2024-12-31",
    endTime: "",
    location: "string",
    address: "string",
    mapLink: "string",
    mapViewType: 0,
    voteDeadline: "2025-01-18",
    attendanceSurveyEnabled: true,
    scheduleVoteMultiple: true,
    scheduleVoteClosed: true,
    attendanceSurveyClosed: true,
    blocks: [
      {
        sequence: 0,
        type: "string",
        title: "string",
        color: "string",
        content: "string",
      },
      {
        sequence: 0,
        type: "string",
      },
      {
        sequence: 0,
        type: "string",
        content: "string",
      },
      {
        sequence: 0,
        type: "string",
        content: [
          {
            time: "string",
            content: "string",
          },
        ],
      },
    ],
    scheduleVotes: [
      {
        startDate: "2024-12-24",
        startTime: "10:00",
        endDate: "2024-12-28",
        endTime: "14:00",
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
