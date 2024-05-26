import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: 17.6679871,
  lng: 75.9218131,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBnQfeS158hJqjXOO7rNhDAnHC8zL7TUgI">
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
