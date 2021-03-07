import React, {  } from "react";



function Search({productSearch, setProductSearch, filter, setFilter}) {




    return (

      <>
        <div className="searchbar">
          <label style={{ color:"white" }} htmlFor="search">Search </label>
          <input
            style={{ border:'none', padding:'8px', marginLeft:'6px' }}
            type="text"
            id="search"
            placeholder="by name, brand or type..."
            value={productSearch}
            onChange={(e) => setProductSearch(e.target.value)}/>
        </div>
        <hr></hr>
        <div className="nav-filter" >
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="$" >Under $250 </option>
              <option value="$$" >$250 - $500</option>
              <option value="$$$" >$500 - $1000</option>
              <option value="$$$$" >Over $1000</option>
                  
          </select>
        </div>
          
      </>
      );

}

export default Search