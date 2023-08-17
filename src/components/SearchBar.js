import React, { useState } from 'react';

const SearchBar = (props) => {
  const [searchItem, setSearchItem] = useState('');

  const doSearchVideo = (e) => {
    setSearchItem(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    props.searchvideo(searchItem);
  };

  return (
    <div className="search-bar">
      <form onSubmit={submitForm}>
        <input
          className="search-box"
          type="text"
          placeholder="Search Video"
          value={props.searchItem}
          onChange={doSearchVideo}
        />
      </form>
    </div>
  );
};

export default SearchBar;
