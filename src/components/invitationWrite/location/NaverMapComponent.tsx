import {
  Container as MapDiv,
  Marker,
  NaverMap,
  useNavermaps,
} from "react-naver-maps";

interface NaverMapComponentProps {
  longitude: number;
  latitude: number;
}
const NaverMapComponent: React.FC<NaverMapComponentProps> = ({
  longitude,
  latitude,
}) => {
  const navermaps = useNavermaps();

  return (
    <div style={{ width: "100%" }}>
      <MapDiv
        style={{
          height: 132,
        }}
      >
        <NaverMap
          defaultCenter={new navermaps.LatLng(latitude / 10, longitude / 10)}
          defaultZoom={15}
        >
          <Marker
            defaultPosition={
              new navermaps.LatLng(latitude / 10, longitude / 10)
            }
          />
        </NaverMap>
      </MapDiv>
    </div>
  );
};

export default NaverMapComponent;
