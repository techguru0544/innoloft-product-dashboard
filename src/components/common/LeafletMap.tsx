import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

const LeafletMap = ({ mapData }: any) => {
  return (
    <>
      <MapContainer
        center={[parseInt(mapData?.latitude), parseInt(mapData?.longitude)]}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[parseInt(mapData?.latitude), parseInt(mapData?.longitude)]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default LeafletMap;
