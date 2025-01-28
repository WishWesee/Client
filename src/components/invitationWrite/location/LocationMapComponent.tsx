import { useToolBarContext } from "@/contexts/toolBarContext";
import { SearchLocation } from "@/types/invitationWrite/location";
import NaverMap from "@assets/icons/화면GUI_Full/3232/NaverMap.svg?react";
import Delete from "@assets/icons/화면GUI_Line/2020/Delete.svg?react";
import * as S from "@styles/invitationWrite/location/locationMapComponentStyle";
import { useEffect, useState } from "react";
import NaverMapComponent from "./NaverMapComponent";

interface LocationMapComponentProps {
  location: SearchLocation;
  onDelete: () => void;
}
const LocationMapComponent: React.FC<LocationMapComponentProps> = ({
  location,
  onDelete,
}) => {
  const { selectedTool } = useToolBarContext();
  const [isShowMap, setIsShowMap] = useState<boolean>(false);

  useEffect(() => {
    const handleShowMap = () => {
      if (selectedTool?.type === "Map") {
        setIsShowMap(true);
      } else if (selectedTool?.type === "Address") {
        setIsShowMap(false);
      }
    };

    handleShowMap();
  }, [selectedTool]);

  return (
    <S.Container>
      {isShowMap && (
        <div style={{ marginBottom: "12px", width: "100%" }}>
          <NaverMapComponent
            longitude={location.longitude}
            latitude={location.latitude}
          />
        </div>
      )}
      <S.ItemContainer>
        <S.TitleContainer>
          <NaverMap />
          <S.AddressContainer>
            <S.Title>{location.location}</S.Title>
            <S.Address>{location.address}</S.Address>
          </S.AddressContainer>
        </S.TitleContainer>
        <Delete style={{ cursor: "pointer" }} onClick={() => onDelete()} />
      </S.ItemContainer>
    </S.Container>
  );
};

export default LocationMapComponent;
