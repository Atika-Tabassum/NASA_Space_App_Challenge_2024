// import React, { useEffect, useState } from 'react';

// const FetchDataComponent = () => {
//   const [data, setData] = useState(null); // State to hold the fetched data
//   const [loading, setLoading] = useState(true); // State to indicate loading
//   const [error, setError] = useState(null); // State to hold any error

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://data.harvestportal.org/api/3/action/datastore_search?resource_id=89a74655-322a-4d6c-9e6c-75cd156f514c&limit=5');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         setData(result.result.records); // Set the data from the API response
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false); // Set loading to false after the data is fetched
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures the effect runs only once when the component mounts

//   return (
//     <div>
//       <h1>API Data Fetch</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <ul>
//           {data && data.map((item, index) => (
//             <li key={index}>{JSON.stringify(item)}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default FetchDataComponent;


// /*
// // random 5 data from the api
// import React, { useEffect, useState } from 'react';

// const FetchRandomDataComponent = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Function to shuffle an array
//   const shuffleArray = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://data.harvestportal.org/api/3/action/datastore_search?resource_id=89a74655-322a-4d6c-9e6c-75cd156f514c');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         const allRecords = result.result.records;

//         // Shuffle the records and take the first 5 random entries
//         const randomRecords = shuffleArray(allRecords).slice(0, 5);

//         setData(randomRecords); // Set the random 5 entries
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Random 5 Results</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <ul>
//           {data && data.map((item, index) => (
//             <li key={index}>{JSON.stringify(item)}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default FetchRandomDataComponent;

// */

// import React, { useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2'; // Import the Bar chart component
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import './api.css'; 
// // Register necessary Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const FetchDataComponent = () => {
//   const [data, setData] = useState([]); // State to hold fetched data
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://data.harvestportal.org/api/3/action/datastore_search?resource_id=89a74655-322a-4d6c-9e6c-75cd156f514c&limit=10');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         setData(result.result.records); // Set the fetched data
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchData();
//   }, []);

//   // Prepare data for the bar chart
//   const chartData = {
//     labels: data.map(item => item["Commodity Name"]), // X-axis labels
//     datasets: [
//       {
//         label: 'Price Volatilities',
//         data: data.map(item => item["Price volatilities"] === "Low volatility" ? 1 : (item["Price volatilities"] === "High volatility" ? 3 : 2)), // Convert volatility to numbers
//         backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
//       }
//     ]
//   };

//   return (
//     <div>
//       <h1>API Data Fetch with Graph</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <div>
//           <Bar data={chartData} options={{ responsive: true }} /> {/* Render the bar chart */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FetchDataComponent;
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FetchDataComponent = () => {
  const [data, setData] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://data.harvestportal.org/api/3/action/datastore_search?resource_id=89a74655-322a-4d6c-9e6c-75cd156f514c&limit=100'); // Fetch 100 records
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        
        // Randomly select 10 records from the fetched data
        const randomRecords = result.result.records
          .sort(() => 0.5 - Math.random()) // Shuffle the array
          .slice(0, 10); // Select the first 10 records

        setData(randomRecords); // Set the fetched data
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []);

  // Prepare data for the bar chart
  const chartData = {
    labels: data.map(item => item["Commodity Name"]), // X-axis labels
    datasets: [
      {
        label: 'Price Volatilities',
        data: data.map(item => {
          // Convert price volatilities to numbers for visualization
          return item["Price volatilities"] === "Low volatility" ? 1 : 
                 item["Price volatilities"] === "High volatility" ? 3 : 2;
        }),
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
      }
    ]
  };

  return (
    <div>
      <h1>API Data Fetch with Graph</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <Bar data={chartData} options={{ responsive: true }} /> {/* Render the bar chart */}
        </div>
      )}
    </div>
  );
};

export default FetchDataComponent;
