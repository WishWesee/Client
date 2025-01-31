import { useState } from "react";
import ListComponent from "@/components/invite/ListComponent";
import { useReceivedInvitationQuery } from "@/api/invitation/getReceivedInvitation";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "@/components/invite/LoadingComponent";

const ReceivedInvitationListPage = () => {
  const navigate = useNavigate();
  const thisYear = new Date().getFullYear();
  const [year, setYear] = useState(thisYear);

  const { data, isError, isLoading } = useReceivedInvitationQuery(year);

  if (isLoading)
    return <LoadingComponent text={"내가 받은 초대장을 가져오고 있어요..."} />;

  if (isError) navigate("/login");

  return (
    <>
      {data && (
        <ListComponent data={data} year={year} setYear={setYear} title="받은" />
      )}
    </>
  );
};

export default ReceivedInvitationListPage;
