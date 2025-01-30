import { useSentInvitationQuery } from "@/api/invitation/getSentInvitation";
import { useState } from "react";
import ListComponent from "@/components/invite/ListComponent";

const SentInvitationListPage = () => {
  const thisYear = new Date().getFullYear();
  const [year, setYear] = useState(thisYear);

  const { data } = useSentInvitationQuery(year);

  return (
    <>
      <ListComponent data={data} year={year} setYear={setYear} title="보낸" />
    </>
  );
};

export default SentInvitationListPage;
