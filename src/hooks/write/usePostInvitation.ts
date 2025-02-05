import {
  postInvitation,
  postInvitationSave,
} from "@/api/invitation/postInvitation";
import { InvitationResponse } from "@/types/invitation";
import { useMutation } from "@tanstack/react-query";

export function usePostInvitation() {
  return useMutation<InvitationResponse, Error, FormData>({
    mutationFn: (invitationReq) => postInvitation(invitationReq),
  });
}

export function usePostInvitationSave() {
  return useMutation<InvitationResponse, Error, FormData>({
    mutationFn: (invitationReq) => postInvitationSave(invitationReq),
  });
}
