export type TInvitationRes = {
  invitationId: number;
  alreadySaved: boolean;
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
  location: string;
  address: string;
  mapLink: string;
  blocks: [];
  owner: boolean;
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
