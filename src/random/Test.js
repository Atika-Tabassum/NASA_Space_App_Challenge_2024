import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";

const ClickableMap = ({ onMapClick }) => {
  useMapEvents({
    click: (e) => {
      onMapClick(e.latlng);
    },
  });
  return null;
};

const MapComponent = () => {
  const [clickedLocation, setClickedLocation] = useState(null);
  const [carbonData, setCarbonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch MiCASA carbon data
  const fetchCarbonData = async (lat, lon) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://data.ghgcenter.gov/api/v1/micasa-carbonflux`,
        {
          params: {
            lat: lat,
            lon: lon,
            // Add other necessary parameters here, if required.
          },
        }
      );
      setCarbonData(response.data);
    } catch (err) {
      setError("Error fetching carbon data");
    } finally {
      setLoading(false);
    }
  };

  const handleMapClick = (latlng) => {
    setClickedLocation(latlng);
    fetchCarbonData(latlng.lat, latlng.lng);
  };

  return (
    <div>
      <h1>Carbon Flux Data Explorer</h1>
      <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: "600px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <ClickableMap onMapClick={handleMapClick} />
        {clickedLocation && (
          <Marker position={clickedLocation}>
            <Popup>
              <div>
                <h2>Location Info</h2>
                <p>Latitude: {clickedLocation.lat}</p>
                <p>Longitude: {clickedLocation.lng}</p>
                {loading && <p>Loading carbon data...</p>}
                {error && <p>{error}</p>}
                {carbonData && (
                  <div>
                    <p><strong>NPP:</strong> {carbonData.NPP || "N/A"}</p>
                    <p><strong>Respiration (Rh):</strong> {carbonData.Rh || "N/A"}</p>
                    <p><strong>Wildfire Emissions (FIRE):</strong> {carbonData.FIRE || "N/A"}</p>
                    <p><strong>Fuel Wood Emissions (FUEL):</strong> {carbonData.FUEL || "N/A"}</p>
                    <p><strong>Net Ecosystem Exchange (NEE):</strong> {carbonData.NEE || "N/A"}</p>
                    <p><strong>Net Biosphere Exchange (NBE):</strong> {carbonData.NBE || "N/A"}</p>
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
