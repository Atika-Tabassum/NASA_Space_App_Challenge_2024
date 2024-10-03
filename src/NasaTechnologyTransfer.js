import React, { useEffect, useState } from "react";
import axios from "axios";

const NasaTechnologyTransfer = () => {
  const [disasters, setDisasters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDisasterData = async () => {
      try {
        // Example endpoint for recent natural disasters (GDACS API)
        const response = await axios.get(
          "https://www.gdacs.org/gdacs_api/alerts"
        );
        setDisasters(response.data); // Adjust based on API response structure
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDisasterData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Natural Disaster Forecasts</h1>
      <ul>
        {disasters.map((disaster, index) => (
          <li key={index}>
            <h2>{disaster.title || "No Title"}</h2>
            <p>{disaster.description || "No Description Available"}</p>
            <p>Date: {disaster.date || "No Date Available"}</p>
            {/* Add more details as necessary */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NasaTechnologyTransfer;
