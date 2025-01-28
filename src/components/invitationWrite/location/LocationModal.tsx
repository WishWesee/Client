import { SearchLocation } from "@/types/invitationWrite/location";
import * as S from "@styles/invitationWrite/location/locationModal";

const dummyLocations: SearchLocation[] = [
  {
    location: "명지대학교",
    address: "서울특별시 서대문구 명지대길 116",
    mapLink: "https://map.naver.com/v5/search/명지대학교",
    latitude: 37.582218,
    longitude: 127.001739,
  },
  {
    location: "서울대학교",
    address: "서울특별시 관악구 관악로 1",
    mapLink: "https://map.naver.com/v5/search/서울대학교",
    latitude: 37.459883,
    longitude: 126.951966,
  },
  {
    location: "고려대학교",
    address: "서울특별시 성북구 안암로 145",
    mapLink: "https://map.naver.com/v5/search/고려대학교",
    latitude: 37.589202,
    longitude: 127.020256,
  },
];

interface LocationModalProps {
  locaions: SearchLocation[];
}

const LocationModal: React.FC<LocationModalProps> = ({ locaions }) => {
  const handleSetLocation = (location: SearchLocation) => {};

  return (
    <S.Container>
      {locaions !== null && (
        <>
          {locaions.map((location, index) => (
            <S.ItemContainer
              key={index}
              onClick={() => handleSetLocation(location)}
            >
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
