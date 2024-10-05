import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NasaTechnologyTransfer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://eonet.gsfc.nasa.gov/api/v2.1/events?status=open&limit=5');
                setData(response.data.events); // Use 'events' array from the API response
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>NASA Open Events (Natural Disasters)</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <h2>{item.title || 'No Title Available'}</h2> {/* Access title directly */}
                        <p>{item.description || 'No Description Available'}</p> {/* Check description availability */}
                        <p>Status: {item.closed ? 'Closed' : 'Open'}</p> {/* Display event status */}
                        <p>Date: {new Date(item.geometries[0]?.date).toLocaleDateString() || 'No Date Available'}</p> {/* Format the date */}
                        <p>Category: {item.categories[0]?.title || 'No Category Available'}</p> {/* Display category */}
                        <a href={item.sources[0]?.url} target="_blank" rel="noopener noreferrer">
                            More Info
                        </a> 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NasaTechnologyTransfer;
