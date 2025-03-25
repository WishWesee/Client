export interface TimeTable {
  time: string;
  content: string;
}

export interface Block {
  sequence: number;
  type: string;
  title?: string;
  color?: string;
  font?: string;
  styles?: string;
  content?: string | TimeTable[];
  image?: string | File;
  time?: string;
  colorCode?: number;
}

interface ScheduleVote {
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

interface Invitation {
  invitationId: number | null;
  title: string;
  tempSaved: boolean;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  userLocation: string;
  location: string;
  address: string;
  mapLink: string;
  latitude: number;
  longitude: number;
  mapViewType: number;
  voteDeadline: string;
  attendanceSurveyEnabled: boolean;
  scheduleVoteMultiple: boolean;
  scheduleVoteClosed: boolean;
  attendanceSurveyClosed: boolean;
  blocks: Block[];
  scheduleVotes: ScheduleVote[];
}

export interface InvitationState {
  invitation: Invitation;
  cardImage: File | null;
  photoImages: File[];
  setInvitation: (update: (draft: Invitation) => void) => void;
  setCardImage: (image: File | null) => void;
  addImage: (images: File) => void;
  addBlock: (newBlock: Block) => void;
  updateBlock: (sequence: number, updatedProperties: Partial<Block>) => void;
  updateTimeTable: (sequence: number, index: number, newTime: string) => void;
  updateTimeTableContent: (
    sequence: number,
    index: number,
    newContent: string
  ) => void;
  resetInvitation: () => void;
  addTimeTableItem: (sequence: number) => void;
}

export interface InvitationResponse {
  invitationId: number;
  message: string;
}
