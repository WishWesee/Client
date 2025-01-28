import { getSearch } from "@/api/write/getSearch";
import { SearchLocation } from "@/types/invitationWrite/location";
import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

export function useGetSearch(
  name: string
): UseSuspenseQueryResult<SearchLocation[], Error> {
  return useSuspenseQuery({
    queryKey: ["GetSearch"],
    queryFn: () => getSearch(name),
  });
}
