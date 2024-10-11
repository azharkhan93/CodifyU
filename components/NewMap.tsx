"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { LatLngTuple } from "leaflet"; 

const position: LatLngTuple = [34.06577, 74.83166];

const Map = () => {
    return (
        <MapContainer
            center={position}
            zoom={10}
            scrollWheelZoom={false}
            style={{ height: "490px", width: "100%", }}
        >
            <TileLayer
            
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>Hurriyat Road, Rajbagh Extension, Srinagar</Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
