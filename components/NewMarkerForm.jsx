"use client";

import { useState, useEffect } from "react";

// import PromptCard from "./PromptCard";

// const PromptCardList = ({ data, handleTagClick }) => {
//   return (
//     <div className='mt-16 prompt_layout'>
//       {data.map((post) => (
//         <PromptCard
//           key={post._id}
//           post={post}
//           handleTagClick={handleTagClick}
//         />
//       ))}
//     </div>
//   );
// };

// const NewMarkerForm = () => {
//   const [allPosts, setAllPosts] = useState([]);

//   // Search states
//   const [searchText, setSearchText] = useState("");
//   const [searchTimeout, setSearchTimeout] = useState(null);
//   const [searchedResults, setSearchedResults] = useState([]);

//   const fetchPosts = async () => {
//     const response = await fetch("/api/prompt");
//     const data = await response.json();

//     setAllPosts(data);
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const filterPrompts = (searchtext) => {
//     const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
//     return allPosts.filter(
//       (item) =>
//         regex.test(item.creator.username) ||
//         regex.test(item.tag) ||
//         regex.test(item.prompt)
//     );
//   };

//   const handleSearchChange = (e) => {
//     clearTimeout(searchTimeout);
//     setSearchText(e.target.value);

//     // debounce method
//     setSearchTimeout(
//       setTimeout(() => {
//         const searchResult = filterPrompts(e.target.value);
//         setSearchedResults(searchResult);
//       }, 500)
//     );
//   };

//   const handleTagClick = (tagName) => {
//     setSearchText(tagName);

//     const searchResult = filterPrompts(tagName);
//     setSearchedResults(searchResult);
//   };

//   return (
//     <section className='feed'>
//       <form className='relative w-full flex-center'>
//         <input
//           type='text'
//           placeholder='Search for a tag or a username'
//           value={searchText}
//           onChange={handleSearchChange}
//           required
//           className='search_input peer'
//         />
//       </form>

//       {/* All Prompts */}
//       {/* {searchText ? (
//         <PromptCardList
//           data={searchedResults}
//           handleTagClick={handleTagClick}
//         />
//       ) : (
//         <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
//       )} */}
//     </section>
//   );
// };

// export default NewMarkerForm;

const NewMarkerForm = ({ onSubmit }) => {
    const [newMarker, setNewMarker] = useState(""); // New state for the marker input field
  
    const handleMarkerChange = (e) => {
      setNewMarker(e.target.value);
    };

    // const handleMarkerSubmit = (e) => {
    async function handleMarkerSubmit (e) {
        e.preventDefault();

        if (newMarker === "") return

        onSubmit(newMarker)
  
        // // Create an object with the marker data
        // const markerData = {
        //     marker: newMarker,
        // };

        // try {
        //     // Make the API request to save the marker
        //     const response = await fetch("/api/save-marker", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(markerData),
        //     });

        //     // Check if the request was successful
        //     if (response.ok) {
        //     // Handle the successful response
        //     console.log("Marker saved successfully!");

        //     // Clear the input field
        //     setNewMarker("");
        //     } else {
        //     // Handle the error response
        //     console.log("Failed to save the marker. Please try again.");
        //     }
        // } catch (error) {
        //     // Handle any network or server errors
        //     console.log("An error occurred while saving the marker:", error);
        // }
  
        // After submitting, we clear the input field
        setNewMarker("");
    };
  
    return (
      <form onSubmit={handleMarkerSubmit}>
        <div>
            <input
            type='text'
            placeholder='New Marker'
            value={newMarker}
            onChange={handleMarkerChange}
            required
            />
        </div>
        <button type='submit'>Add +</button>
      </form>
    );
  };
  
  export default NewMarkerForm;