export type TInvitationRes = {
  invitationId: number;
  alreadySaved: boolean;
  canWriteFeedback: boolean;
  cardImage: string;
  title: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  voteDeadline: string;
  hasScheduleVote: boolean;
  scheduleVoteMultiple: boolean;
  scheduleVotes: {
    scheduleVoteId: number;
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    voterCount: number;
    isVoted: boolean;
  }[];
  scheduleVoteClosed: boolean;
  mapViewType: number;
  userLocation: string;
  location: string;
  address: string;
  mapLink: string;
  latitude: number;
  longitude: number;
  blocks: (BoxType | DividerType | PhotoType | TextType | TimeTableType)[];
  attendanceSurveyEnabled: boolean;
  owner: boolean;
  loggedIn: boolean;
};

export type BoxType = {
  type: "box";
  sequence: number;
  title: string;
  content: string;
  colorCode: number;
};

export type DividerType = {
  type: "divider";
  sequence: number;
};

export type PhotoType = {
  type: "photo";
  sequence: number;
  image: string;
};

export type TextType = {
  type: "text";
  sequence: number;
  content: string;
  font: string;
  color: string;
  styles: string;
};

export type TimeTableType = {
  type: "timeTable";
  sequence: number;
  content: {
    time: string;
    content: string;
  }[];
};

export type TVoterRes = {
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  voterCount: number;
  voterNames: string[];
};

export type TAttendanceRes = {
  check: boolean;
  information: {
    attendanceSurveyClosed: boolean;
    attendingCount: number;
    notAttendingCount: number;
    isAttending: boolean | null;
    isSender: boolean;
  };
};

export type TAttendanceVotersRes = {
  voterCount: number;
  voterNames: string[];
};

export type TFeedbackRes = {
  check: boolean;
  information: {
    count: number;
    feedbackResList: {
      feedbackId: number;
      content: string;
      image: string | null;
      deletable: boolean;
    }[];
    isWritable: boolean;
  };
};

export type TInvitationReq = {
  invitation: {
    invitationId?: number;
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
    blocks: (BoxType | DividerType | PhotoType | TextType | TimeTableType)[];
    scheduleVotes: {
      startDate: string;
      startTime: string;
      endDate: string;
      endTime: string;
    }[];
  };
  cardImage: string;
  photoImages: string[];
};

export type TInviteListRes = {
  totalInvitations: number;
  invitations: {
    invitationId: number;
    cardImage: string;
    title: string;
    date: string;
  }[];
};
