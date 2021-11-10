import React from "react";


//pass down handleSearch as a prop
//set your onChange to equal the event handler defined in PlantPage component
function Search({handleSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
