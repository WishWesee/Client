import { useToolBarContext } from "@/contexts/toolBarContext";
import useInvitationStore from "@/store/invitation";
import { SearchLocation } from "@/types/invitationWrite/location";
import NaverMap from "@assets/icons/화면GUI_Full/3232/NaverMap.svg?react";
import Delete from "@assets/icons/화면GUI_Line/2020/Delete.svg?react";
import * as S from "@styles/invitationWrite/location/locationMapComponentStyle";
import { useEffect, useState } from "react";
import NaverMapComponent from "./NaverMapComponent";

interface LocationMapComponentProps {
  location: SearchLocation;
  onDelete?: () => void;
  borderColor: string;
  mapViewType?: number;
}
const LocationMapComponent: React.FC<LocationMapComponentProps> = ({
  location,
  onDelete,
  borderColor,
  mapViewType,
}) => {
  const mapViewTypeNumber =
    mapViewType !== undefined ? mapViewType !== 0 : false;

  const { selectedTool } = useToolBarContext();

  const [isShowMap, setIsShowMap] = useState<boolean>(mapViewTypeNumber);

  const { setInvitation } = useInvitationStore();

  useEffect(() => {
    const handleShowMap = () => {
      if (selectedTool?.type === "Map") {
        setIsShowMap(true);
        setInvitation((prevInvitation) => {
          prevInvitation.mapViewType = 1;
        });
      } else if (selectedTool?.type === "Address") {
        setIsShowMap(false);
        setInvitation((prevInvitation) => {
          prevInvitation.mapViewType = 0;
        });
      }
    };

    handleShowMap();
  }, [selectedTool]);

  return (
    <S.Container $borderColor={borderColor}>
      {isShowMap && (
        <div style={{ marginBottom: "12px", width: "100%" }}>
          <NaverMapComponent
            longitude={location.longitude}
            latitude={location.latitude}
          />
        </div>
      )}
      <S.ItemContainer>
        <S.TitleContainer onClick={() => window.open(`${location.mapLink}`)}>
          <NaverMap />
          <S.AddressContainer>
            <S.Title>{location.location}</S.Title>
            <S.Address>{location.address}</S.Address>
          </S.AddressContainer>
        </S.TitleContainer>
        {onDelete && (
          <Delete style={{ cursor: "pointer" }} onClick={() => onDelete()} />
        )}
      </S.ItemContainer>
    </S.Container>
  );
};

export default LocationMapComponent;
