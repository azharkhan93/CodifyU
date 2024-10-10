"use client";
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'; 
import { Box } from '../styled';
// const position = [34.06577, 74.83166]

export const MapSection = () => {
  return (

    <Box width={"100%"} bg={"secondary"}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2375.4061517317273!2d74.82990060874124!3d34.06571026975475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDAzJzU2LjgiTiA3NMKwNDknNTQuMCJF!5e0!3m2!1sen!2sin!4v1728502374881!5m2!1sen!2sin"
        width="full"
        height="500"
        loading="lazy"
        style={{border: "none", mixBlendMode: "screen"}}
      ></iframe>
    </Box>

    
   
  );
};

    
      // <MapContainer
      //   center={[34.06577, 74.83166]} 
      //   zoom={13}
      //   scrollWheelZoom={true}
      //   style={{ height: '400px', width: '100%' }}
      // >
      //   <TileLayer
      //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      //   />
      //   <Marker position={[34.06577, 74.83166]}>
      //     <Popup>
      //       Hurriyat Road, Rajbagh Extension, Srinagar
      //     </Popup>
      //   </Marker>
      // </MapContainer>
    
//   );
// };












