import React, { useState } from "react";
import { Checkbox, Collapse } from 'antd';


function Search({productSearch, setProductSearch, filter, setFilter}) {



  function handleToggle(){

  }

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
        <hr></hr>
         <div className="checkbox">
              <Checkbox 
                  value="$$"
                  onChange={(e) => setFilter(e.target.value)}
                  type="checkbox"
               
              />Less Expensive
                {/* <input type="checkbox" value="$$" /> Less Expensive&nbsp;&nbsp; */}
          </div>
          <hr></hr>
      </>
      );

}

export default Search