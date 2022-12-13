import React from "react";

const Search = ({ search, setInput }) => {
  const inputHeadler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input onChange={inputHeadler} type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
