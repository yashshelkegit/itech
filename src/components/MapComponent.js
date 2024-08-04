import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default icon issue
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.7.1/dist/images/";

const MyMap = () => {
	const position = [21.0950099, 78.9803096];

	return (
		<MapContainer
			center={position}
			zoom={13}
			style={{ height: "300px", width: "90%" }}
            className="rounded-lg"
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
			/>
			<Marker position={position}>
				<Popup>
					IT Dept <br /> YCCE, Nagpur
				</Popup>
			</Marker>
		</MapContainer>
	);
};

export default MyMap;
