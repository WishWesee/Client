import CheckContentWrap from "@/components/invite/CheckContentWrap";
import InviteBottom from "@/components/invite/InviteBottom";
import TotheTopBtn from "@/components/invite/TotheTopBtn";
import useWMediaQuery from "@/hooks/useWMediaQuery";
import { usePostInvitation } from "@/hooks/write/usePostInvitation";
import { TInvitationReq } from "@/types/invite";
import * as S from "@styles/invite/InvitationDetailPageStyle";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  data: TInvitationReq;
  isCheck: boolean;
};

interface Invitation {
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
  blocks: {
    sequence: number;
    type: string;
    title: string;
    colorCode: number;
    content: string;
  }[];
  scheduleVotes: {
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
  }[];
}

interface FormDataState {
  invitation: Invitation;
  cardImage: File | null;
}

const CheckComponent = ({ data, isCheck }: Props) => {
  const [dataa, setData] = useState<FormDataState>({
    invitation: {
      title: "크리스마스",
      tempSaved: false,
      startDate: "2024-12-30",
      startTime: "",
      endDate: "2024-12-31",
      endTime: "",
      userLocation: "명지대학교 후문",
      location: "명지대학교",
      address: "경기도 용인시 처인구 명지로 116 명지대학교",
      mapLink:
        "https://map.naver.com/v5/search/%EA%B2%BD%EA%B8%B0%EB%8F%84+%EC%9A%A9%EC%9D%B8%EC%8B%9C+%EC%B2%98%EC%9D%B8%EA%B5%AC+%EB%AA%85%EC%A7%80%EB%A1%9C+116+%EB%AA%85%EC%A7%80%EB%8C%80%ED%95%99%EA%B5%90",
      latitude: 37.582218,
      longitude: 127.001739,
      mapViewType: 1,
      voteDeadline: "2025-01-05",
      attendanceSurveyEnabled: true,
      scheduleVoteMultiple: false,
      scheduleVoteClosed: true,
      attendanceSurveyClosed: false,
      blocks: [
        {
          sequence: 1,
          type: "text",
          title: "Dress Code",
          colorCode: 1,
          content: "파랑색으로 입고오세용",
        },
      ],
      scheduleVotes: [
        {
          startDate: "2024-12-24",
          startTime: "10:00",
          endDate: "2024-12-28",
          endTime: "14:00",
        },
      ],
    },
    cardImage: data.cardImage,
  });

  console.log("file type:", typeof data.cardImage); // ✅ 항상 "object" 출력됨
  console.log("file instance:", data.cardImage instanceof File); // ✅ true여야 함
  console.log("file details:", data.cardImage); // ✅ 실제 파일 정보 확인

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setData((prevData) => ({
        ...prevData,
        cardImage: e.target.files![0],
      }));
    }
  };

  const handleSaveInvite = async () => {
    const formData = new FormData();
    formData.append(
      "invitation",
      new Blob([JSON.stringify(dataa.invitation)], { type: "application/json" })
    );
    if (data.cardImage) {
      formData.append("cardImage", data.cardImage);
    }

    try {
      const response = await axios.post(
        "https://wishwesee.n-e.kr/api/v1/invitation",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("등록 실패:", error);
    }
  };

  const { isMobile } = useWMediaQuery();
  const navigate = useNavigate();
  const { mutate: postInvitation } = usePostInvitation();

  //애니메이션 스크롤
  const [scrollY, setScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    updateScreenWidth();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  //완성된 초대장 저장
  // const handleSaveInvite = () => {
  //   console.log("test", data.invitation);
  //   const formData = new FormData();

  //   formData.append(
  //     "invitation",
  //     new Blob([JSON.stringify(dumy)], { type: "application/json" })
  //   );

  //   if (dataa) {
  //     console.log(dataa);
  //     formData.append("cardImage", dataa);
  //   }

  //   // formData.append(
  //   //   "invitation",
  //   //   new Blob([JSON.stringify(data.invitation)], { type: "application/json" })
  //   // );

  //   // if (data.cardImage) {
  //   //   formData.append("cardImage", data.cardImage);
  //   // }

  //   // if (data.photoImages && data.photoImages.length > 0) {
  //   //   Array.from(data.photoImages).forEach((file) => {
  //   //     formData.append("photoImages", file);
  //   //   });
  //   // }

  //   postInvitation(formData, {
  //     onSuccess: (response) => {
  //       //저장 후 결과로 받은 id값
  //       const id = response.invitationId;
  //       navigate(`/invites/${id}`, {
  //         state: { isDone: true },
  //       });
  //     },
  //     onError: (error) => {
  //       console.error("등록 실패:", error);
  //     },
  //   });
  // };

  return (
    <S.Container $isHeader={true}>
      {data && (
        <>
          {isMobile && (
            <S.FadeInImage
              src={
                data.cardImage instanceof File
                  ? URL.createObjectURL(data.cardImage)
                  : (data.cardImage as unknown as string) // SVG 경로 그대로 사용
              }
              alt="카드 이미지"
              $scrollY={scrollY}
              $screenWidth={screenWidth}
            />
          )}
          <TotheTopBtn />
          <S.BodyWrap $screenWidth={screenWidth}>
            {isMobile && (
              <S.Overlay style={{ opacity: Math.max(1 - scrollY / 300, 0) }} />
            )}
            <CheckContentWrap data={data} />
            <InviteBottom
              btnText="완료"
              onBtnClick={handleSaveInvite}
              isDisabled={false}
              isCheck={isCheck}
              onCheckClick={() => console.log(isCheck)}
            />
          </S.BodyWrap>
        </>
      )}
      <div>
        <input type="file" name="cardImage" onChange={handleFileChange} />
        <button onClick={handleSaveInvite}>저장</button>
      </div>{" "}
    </S.Container>
  );
};

export default CheckComponent;
