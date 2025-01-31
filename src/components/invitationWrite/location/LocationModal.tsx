import { SearchLocation } from "@/types/invitationWrite/location";
import * as S from "@styles/invitationWrite/location/locationModal";

interface LocationModalProps {
  locaions: SearchLocation[];
  setLocation: (location: SearchLocation) => void;
}

const LocationModal: React.FC<LocationModalProps> = ({
  locaions,
  setLocation,
}) => {
  return (
    <S.Container>
      {locaions !== null && (
        <>
          {locaions.map((location, index) => (
            <S.ItemContainer key={index} onClick={() => setLocation(location)}>
              <S.Title>{location.location}</S.Title>
              <S.Address>{location.address}</S.Address>
            </S.ItemContainer>
          ))}
        </>
      )}
    </S.Container>
  );
};

export default LocationModal;
