import React, { useState } from "react";

function SearchInput() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <h1>SearchInput JS</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <h2>{searchTerm}</h2>
    </div>
  );
}

export default SearchInput;
