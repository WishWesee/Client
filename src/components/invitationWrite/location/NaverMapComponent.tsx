import { Container as MapDiv, Marker, NaverMap } from "react-naver-maps";

interface NaverMapComponentProps {
  longitude: number;
  latitude: number;
}
const NaverMapComponent: React.FC<NaverMapComponentProps> = ({
  longitude,
  latitude,
}) => {
  return (
    <MapDiv
      style={{
        height: 120,
      }}
    >
      <NaverMap>
        <Marker defaultPosition={{ lat: latitude, lng: longitude }} />
      </NaverMap>
    </MapDiv>
  );
};

export default NaverMapComponent;
