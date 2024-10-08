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


// import React, { useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const FetchDataComponent = () => {
//   const [data, setData] = useState([]); // State to hold fetched data
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://data.harvestportal.org/api/3/action/datastore_search?resource_id=89a74655-322a-4d6c-9e6c-75cd156f514c&limit=100'); // Fetch 100 records
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
        
//         // Randomly select 10 records from the fetched data
//         const randomRecords = result.result.records
//           .sort(() => 0.5 - Math.random()) // Shuffle the array
//           .slice(0, 10); // Select the first 10 records

//         setData(randomRecords); // Set the fetched data
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
//         data: data.map(item => {
//           // Convert price volatilities to numbers for visualization
//           return item["Price volatilities"] === "Low volatility" ? 1 : 
//                  item["Price volatilities"] === "High volatility" ? 3 : 2;
//         }),
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
// import React, { useEffect, useState } from 'react';
// import './api.css'; // Import custom CSS for styling

// const VolatilityStatus = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://data.harvestportal.org/api/3/action/datastore_search?resource_id=89a74655-322a-4d6c-9e6c-75cd156f514c');
//         const result = await response.json();
//         setData(result.result.records);
//         console.log(result.result.records);

//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Group data by commodity name and calculate the average alert value for each commodity
//   const groupByCommodity = (items) => {
//     const grouped = items.reduce((acc, item) => {
//       const commodity = item['Commodity Name'];
//       if (!acc[commodity]) {
//         acc[commodity] = { totalAlert: 0, count: 0, dates: [], commodity };
//       }
//       acc[commodity].totalAlert += item.Alert;
//       acc[commodity].count += 1;
//       acc[commodity].dates.push(item.Date); // Save date info
//       return acc;
//     }, {});

//     // Compute average alert for each commodity
//     return Object.values(grouped).map((group) => {
//       const avgAlert = group.totalAlert / group.count;
//       const dates = [...new Set(group.dates)]; // Extract unique dates if needed
//       return { ...group, avgAlert, dates };
//     });
//   };

//   // Determine the overall volatility status based on average alert value
//   const getVolatilityStatus = (avgAlert) => {
//     if (avgAlert < 10) return { status: 'Low', color: 'green', icon: '🟢' };
//     if (avgAlert >= 10 && avgAlert < 100) return { status: 'Moderate', color: 'orange', icon: '🟠' };
//     return { status: 'High', color: 'red', icon: '🔴' };
//   };

//   const groupedData = groupByCommodity(data);

//   return (
//     <div className="volatility-status">
//       <h1>Current Volatility Status by Commodity</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <div className="volatility-grid">
//           {groupedData.map((item, index) => {
//             const { status, color, icon } = getVolatilityStatus(item.avgAlert);
//             return (
//               <div key={index} className={`commodity-card ${color}`}>
//                 <div className="card-header">
//                   <h2>{item.commodity.toUpperCase()}</h2>
//                   <p>{item.dates[0]}</p> {/* Display the first date or format dates */}
//                 </div>
//                 <div className="card-body">
//                   <p><strong>{item.avgAlert.toFixed(2)}</strong> average days in {status} volatility</p>
//                   <span className="volatility-icon">{icon}</span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default VolatilityStatus;
// import React, { useEffect, useState } from 'react';
// import './api.css'; // Import custom CSS for styling

// const VolatilityStatus = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://data.harvestportal.org/api/3/action/datastore_search?resource_id=89a74655-322a-4d6c-9e6c-75cd156f514c&limit=46000'); 
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         setData(result.result.records);
//         console.log(result.result.records);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Group data by commodity name and calculate the average alert value for each commodity
//   const groupByCommodity = (items) => {
//     const grouped = items.reduce((acc, item) => {
//       const commodity = item['Commodity Name'];
//       const alertValue = item.Alert ? parseFloat(item.Alert) : 0; 
//       if (!acc[commodity]) {
//         acc[commodity] = { totalAlert: 0, count: 0, dates: [], commodity };
//       }
//       acc[commodity].totalAlert += alertValue;
//       acc[commodity].count += 1;
//       acc[commodity].dates.push(item.Date || 'N/A'); // Handle missing dates
//       return acc;
//     }, {});

//     // Compute average alert for each commodity
//     return Object.values(grouped).map((group) => {
//       const avgAlert = group.totalAlert;
//       console.log(avgAlert, group.totalAlert, group.count);
//       const dates = [...new Set(group.dates)]; // Extract unique dates if needed
//       return { ...group, avgAlert, dates };
//     });
//   };

//   // Determine the overall volatility status based on average alert value
//   const getVolatilityStatus = (avgAlert) => {
//     if (avgAlert > 722) return { status: 'Low', color: 'green', icon: '🟢' };
//     if (avgAlert >= 0 && avgAlert < 722) return { status: 'Moderate', color: 'orange', icon: '🟠' };
//     return { status: 'High', color: 'red', icon: '🔴' };
//   };

//   const groupedData = groupByCommodity(data);

//   return (
//     <div className="volatility-status">
//       <h1>Current Volatility Status by Commodity</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <div className="volatility-grid">
//           {groupedData.map((item, index) => {
//             const { status, color, icon } = getVolatilityStatus(item.avgAlert);
//             return (
//               <div key={index} className={`commodity-card ${color}`}>
//                 <div className="card-header">
//                   <h2>{item.commodity.toUpperCase()}</h2>
//                   <p>{item.dates[0] || 'No Date Available'}</p> {/* Handle missing dates */}
//                 </div>
//                 <div className="card-body">
//                   <p><strong>{item.avgAlert.toFixed(2)}</strong> average days in {status} volatility</p>
//                   <span className="volatility-icon">{icon}</span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default VolatilityStatus;
import React, { useEffect, useState } from 'react';
import './api.css'; // Ensure you add CSS for styling like the provided screenshot

const VolatilityStatus = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const limit = 10000; // Maximum records per request

  useEffect(() => {
    const fetchData = async () => {
      let allRecords = [];
      let offset = 0;
      let totalRecords = 0;
    
      try {
        do {
          const response = await fetch(`https://data.harvestportal.org/api/3/action/datastore_search?resource_id=89a74655-322a-4d6c-9e6c-75cd156f514c&limit=${limit}&offset=${offset}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
    
          // Filter records for the year greater than 2020
          const filteredRecords = result.result.records.filter(item => {
            const recordDate = new Date(item.Date);
            console.log('Record Dates:', item.Date);
            return recordDate.getFullYear() > 2019; // Check if the year is greater than 2020
          });
           // Log dates to verify the format

          // Add filtered records to allRecords
          allRecords = [...allRecords, ...filteredRecords];
          totalRecords = result.result.total;
          offset += limit;
        } while (offset < totalRecords);
    
        setData(allRecords);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // Group data by commodity name and calculate the average alert value for each commodity
  const groupByCommodity = (items) => {
    const grouped = items.reduce((acc, item) => {
      const commodity = item['Commodity Name'];
      const alertValue = item.Alert ? parseFloat(item.Alert) : 0;

      if (!acc[commodity]) {
        acc[commodity] = { totalAlert: 0, count: 0, dates: [], commodity };
      }

      if (!isNaN(alertValue)) {
        acc[commodity].totalAlert += alertValue;
        acc[commodity].count += 1;
      }

      if (item.Date) {
        acc[commodity].dates.push(item.Date);
      }

      return acc;
    }, {});

    return Object.values(grouped).map((group) => {
      const avgAlert = group.count > 0 ? group.totalAlert / group.count : 0;
      const dates = [...new Set(group.dates)];
      return { ...group, avgAlert, dates };
    });
  };

  const groupedData = groupByCommodity(data);
  // Add this function within your VolatilityStatus component
const formatDate = (date) => {
  const parsedDate = new Date(date);
  if (!isNaN(parsedDate)) {
    return parsedDate.toLocaleDateString(); // Format date as "MM/DD/YYYY" or other locale formats
  }
  return 'N/A'; // Handle invalid date
};

// Add this function within your VolatilityStatus component
const getVolatilityStatus = (avgAlert) => {
  if (avgAlert > 722) return { status: 'Low', color: 'green', icon: '🟢' };
  if (avgAlert >= 0 && avgAlert <= 722) return { status: 'Moderate', color: 'orange', icon: '🟠' };
  return { status: 'High', color: 'red', icon: '🔴' };
};


  return (
    <div className="volatility-status">
      <h1>Current Volatility Status by Commodity</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="volatility-grid">
          {groupedData.map((item, index) => {
            const { status, color, icon } = getVolatilityStatus(item.avgAlert);
            return (
              <div key={index} className={`commodity-card ${color}`}>
                <div className="card-header">
                  <h2>{item.commodity.toUpperCase()}</h2>
                  <p>{item.dates.length > 0 ? formatDate(item.dates[0]) : 'No Date Available'}</p>
                </div>
                <div className="card-body">
                  <p><strong>{item.avgAlert.toFixed(2)}</strong> days in {status} volatility</p>
                  <span className="volatility-icon">{icon}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default VolatilityStatus;
