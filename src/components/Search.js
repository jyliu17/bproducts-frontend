import React from "react";

function Search({productSearch, setProductSearch}) {

    return (
        <div className="searchbar">
          <label style={{ color:"white" }} htmlFor="search">Search by Name</label>
          <input
            style={{ border:'none', padding:'8px', marginLeft:'6px' }}
            type="text"
            id="search"
            placeholder="Search..."
            value={productSearch}
            onChange={(e) => setProductSearch(e.target.value)}
          />
        </div>
      );

}

export default Search