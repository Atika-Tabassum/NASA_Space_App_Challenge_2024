import React, { useEffect, useState } from 'react';

const FetchDataComponent = () => {
  const [data, setData] = useState(null); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State to indicate loading
  const [error, setError] = useState(null); // State to hold any error

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://data.harvestportal.org/api/3/action/datastore_search?resource_id=89a74655-322a-4d6c-9e6c-75cd156f514c&limit=5');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.result.records); // Set the data from the API response
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false after the data is fetched
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      <h1>API Data Fetch</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data && data.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchDataComponent;


/*
// random 5 data from the api
import React, { useEffect, useState } from 'react';

const FetchRandomDataComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://data.harvestportal.org/api/3/action/datastore_search?resource_id=89a74655-322a-4d6c-9e6c-75cd156f514c');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        const allRecords = result.result.records;

        // Shuffle the records and take the first 5 random entries
        const randomRecords = shuffleArray(allRecords).slice(0, 5);

        setData(randomRecords); // Set the random 5 entries
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Random 5 Results</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data && data.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchRandomDataComponent;

*/