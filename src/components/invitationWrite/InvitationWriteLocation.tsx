import ActiveFinder from "@assets/icons/화면GUI_Full/2424_Activate/Finder.svg?react";
import Finder from "@assets/icons/화면GUI_Full/2424_Default/Finder.svg?react";
import * as S from "@styles/invitationWrite/invitationWriteLocation";

import { LocationToolBarList } from "@/constants/invitationWrite/toolBar";
import { useToolBarContext } from "@/contexts/toolBarContext";
import { useGetSearch } from "@/hooks/write/search";
import useInvitationStore from "@/store/invitation";
import { SearchLocation } from "@/types/invitationWrite/location";
import { useEffect, useState } from "react";
import TwoBtnModal from "../modal/TwoBtnModal";
import LocationMapComponent from "./location/LocationMapComponent";
import LocationModal from "./location/LocationModal";

const InvitationWriteLocation = () => {
  const [isFocused, setIsFocused] = useState<"input" | "search" | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [location, setLocation] = useState<SearchLocation | null>(null);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isShowSearchModal, setIsShowSearchModal] = useState<boolean>(false);

  const { selectedTool, setToolBarContent } = useToolBarContext();
  const { setInvitation } = useInvitationStore();
  const { data, refetch } = useGetSearch(searchInputValue);

  const cancelInput = () => {
    setInputValue("");
    setIsFocused(null);
  };

  useEffect(() => {
    if (searchInputValue !== "") {
      refetch();
    }
  }, [searchInputValue, refetch]);

  useEffect(() => {
    if (selectedTool?.type === "ReSearch") {
      setIsShowSearchModal(true);
    }
  }, [selectedTool]);

  const handleUserLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    setInvitation((prevInvitation) => {
      prevInvitation.userLocation = e.target.value;
    });
  };

  const handleLocation = (location: SearchLocation) => {
    setLocation(location);

    setInvitation((prevInvitation) => {
      prevInvitation.address = location.address;
      prevInvitation.location = location.location;
      prevInvitation.mapLink = location.mapLink;
      prevInvitation.latitude = location.latitude;
      prevInvitation.longitude = location.longitude;
    });
  };

  return (
    <S.Container
      onClick={(e) => {
        e.stopPropagation();
        setToolBarContent(LocationToolBarList);
      }}
    >
      <S.TitleContainer>
        <S.Label>장소</S.Label>
      </S.TitleContainer>
      <S.InputContainer>
        {/* 직접 입력 input */}
        <S.Input
          type="search"
          placeholder="직접 입력"
          value={inputValue}
          onChange={handleUserLocation}
          onFocus={() => setIsFocused("input")}
          onBlur={() => setIsFocused(null)}
        />
        {isFocused === "input" && (
          <S.CancelButton onClick={cancelInput}>취소</S.CancelButton>
        )}
      </S.InputContainer>

      {/* 지도 input */}
      <S.InputContainer>
        {/* 직접 입력 input */}
        {location ? (
          <>
            <LocationMapComponent
              location={location}
              onDelete={() => setIsShowModal(true)}
              borderColor={"var(--Blue10)"}
            />
          </>
        ) : (
          <>
            {isFocused === "search" ? (
              <ActiveFinder style={{ position: "absolute", left: "12px" }} />
            ) : (
              <Finder style={{ position: "absolute", left: "12px" }} />
            )}

            <S.LocationInput
              type="search"
              placeholder="장소 검색"
              value={searchInputValue} // 상태 값으로 설정
              onChange={(e) => setSearchInputValue(e.target.value)} // 입력값 변경 시 상태 업데이트
              onFocus={() => setIsFocused("search")}
              onBlur={() => setIsFocused(null)}
            />
            {isFocused === "search" && (
              <S.CancelButton
                onClick={() => {
                  setIsFocused(null);
                  setSearchInputValue("");
                }}
              >
                취소
              </S.CancelButton>
            )}
          </>
        )}

        {searchInputValue !== "" && data !== null && location === null && (
          <LocationModal locaions={data} setLocation={handleLocation} />
        )}

        {isShowSearchModal && (
          <TwoBtnModal
            text={
              "다시 검색하면 기존에 입력된 주소가 삭제됩니다. \n다시 검색하시겠습니까?"
            }
            leftBtnText={"취소"}
            rightBtnText={"다시 검색"}
            color={"blue"}
            onLeftClick={() => setIsShowSearchModal(false)}
            onRightClick={() => {
              setLocation(null);
              setSearchInputValue(searchInputValue);
              setIsShowSearchModal(false);
            }}
          />
        )}

        {isShowModal && (
          <TwoBtnModal
            text={"추가한 주소를 삭제하시겠습니까?"}
            leftBtnText={"취소"}
            rightBtnText={"삭제"}
            color={"red"}
            onLeftClick={() => setIsShowModal(false)}
            onRightClick={() => {
              setLocation(null);
              setSearchInputValue("");
              setIsShowModal(false);
            }}
          />
        )}
      </S.InputContainer>
    </S.Container>
  );
};

export default InvitationWriteLocation;
