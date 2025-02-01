import { useSentInvitationQuery } from "@/api/invitation/getSentInvitation";
import { useState } from "react";
import ListComponent from "@/components/invite/ListComponent";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "@/components/invite/LoadingComponent";

const SentInvitationListPage = () => {
  const navigate = useNavigate();
  const thisYear = new Date().getFullYear();
  const [year, setYear] = useState(thisYear);

  const { data, isError, isLoading } = useSentInvitationQuery(year);

  if (isLoading)
    return <LoadingComponent text={"내가 보낸 초대장을 가져오고 있어요..."} />;

  if (isError) navigate("/login");

  return (
    <>
      {data && (
        <ListComponent data={data} year={year} setYear={setYear} title="보낸" />
      )}
    </>
  );
};

export default SentInvitationListPage;
