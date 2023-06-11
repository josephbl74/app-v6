"use client";

import { useState, useEffect } from "react";

const MarkerList = ({ markers, toggleMarker, deleteMarker }) => {


  return (
    <div>
      <h2>Marker List</h2>
      <ul>
            {markers.length === 0 ? (
                <li>No Markers</li>
            ) : (
                markers.map((marker) => (
                <li key={marker.id}>{marker.text}</li>
                ))
            )}
      </ul>
    </div>
  );
};

export default MarkerList;


// {markers.map((marker) => (
//     <li key={marker.id}>{marker.text}</li>
//   ))}







// before the return


//   const [markers, setMarkers] = useState([]);

//   useEffect(() => {
//     // Fetch the list of markers from the backend when the component mounts
//     fetchMarkers();
//   }, []);

//   const fetchMarkers = async () => {
//     try {
//       // Make the API request to fetch the markers
//       const response = await fetch("/api/markers");
//       const data = await response.json();

//       // Update the state with the retrieved markers
//       setMarkers(data);
//     } catch (error) {
//       // Handle any network or server errors
//       console.log("An error occurred while fetching the markers:", error);
//     }
//   };