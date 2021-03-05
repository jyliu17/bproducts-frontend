import React, { useState } from "react";

function Search({productSearch, setProductSearch, filter, setFilter}) {

    return (

      <>
        <div className="searchbar">
          <label style={{ color:"white" }} htmlFor="search">Search by Name</label>
          <input
            style={{ border:'none', padding:'8px', marginLeft:'6px' }}
            type="text"
            id="search"
            placeholder="Search..."
            value={productSearch}
            onChange={(e) => setProductSearch(e.target.value)}/>
        </div>
         <div className="search-filter">
              
                <input type="checkbox" value="$$" /> Less Expensive&nbsp;&nbsp;
          </div>
      </>
      );

}

export default Search