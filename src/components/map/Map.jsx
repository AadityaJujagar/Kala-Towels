import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: 17.6679871,
  lng: 75.9218131,
};

const Map = () => {
  const api_key = import.meta.env.REACT_APP_API_KEY;
  console.log(api_key);
  return (
    <LoadScript googleMapsApiKey={api_key}>
      <GoogleMap
        mapContainerClassName="w-[400px] h-[250px]"
        center={center}
        zoom={17}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
