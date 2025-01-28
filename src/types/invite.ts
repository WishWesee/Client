export type TInvitationRes = {
  invitationId: number;
  cardImage: string;
  title: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  voteDeadline: string;
  scheduleVoteMultiple: boolean;
  hasScheduleVote: boolean;
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
