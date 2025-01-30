import { useState } from "react";
import ListComponent from "@/components/invite/ListComponent";
import { useReceivedInvitationQuery } from "@/api/invitation/getReceivedInvitation";

const ReceivedInvitationListPage = () => {
  const thisYear = new Date().getFullYear();
  const [year, setYear] = useState(thisYear);

  const { data } = useReceivedInvitationQuery(year);

  return (
    <>
      <ListComponent data={data} year={year} setYear={setYear} title="받은" />
    </>
  );
};

export default ReceivedInvitationListPage;
