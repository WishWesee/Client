import ActiveFinder from "@assets/icons/화면GUI_Full/2424_Activate/Finder.svg?react";
import Finder from "@assets/icons/화면GUI_Full/2424_Default/Finder.svg?react";
import * as S from "@styles/invitationWrite/invitationWriteLocation";

import { LocationToolBarList } from "@/constants/invitationWrite/toolBar";
import { useToolBarContext } from "@/contexts/toolBarContext";
import { useGetSearch } from "@/hooks/write/search";
import { SearchLocation } from "@/types/invitationWrite/location";
import { useEffect, useState } from "react";
import LocationMapComponent from "./location/LocationMapComponent";
import LocationModal from "./location/LocationModal";

const InvitationWriteLocation = () => {
  const [isFocused, setIsFocused] = useState<"input" | "search" | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [location, setLocation] = useState<SearchLocation | null>(null);

  const { setToolBarContent } = useToolBarContext();
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
          onChange={(e) => setInputValue(e.target.value)}
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
              onDelete={() => {
                setLocation(null);
                setSearchInputValue("");
              }}
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
          <LocationModal locaions={data} setLocation={setLocation} />
        )}
      </S.InputContainer>
    </S.Container>
  );
};

export default InvitationWriteLocation;
