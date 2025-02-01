interface TimeContent {
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
  content?: string | TimeContent[];
}

interface ScheduleVote {
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

interface Invitation {
  invitationId: number;
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
  cardImage: string;
  photoImages: string[];
  setInvitation: (update: (draft: Invitation) => void) => void;
  setCardImage: (image: string) => void;
  setPhotoImages: (images: string[]) => void;
  addBlock: (newBlock: Block) => void;
  updateBlock: (sequence: number, updatedProperties: Partial<Block>) => void;
}
