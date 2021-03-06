import React, {  } from "react";
import styled from "styled-components"



function Search({productSearch, setProductSearch, filter, setFilter}) {




    return (

      <>
      <Wrapper>
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
       
        <div className="cost-filter" >
        <label style={{ color:"white" }} htmlFor="cost filter"> Price  </label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="$" >Under $250 </option>
              <option value="$$" >$250 - $500</option>
              <option value="$$$" >$500 - $1000</option>
              <option value="$$$$" >Over $1000</option>
                  
          </select>
        </div>
        </Wrapper>  
      </>
      );

}

export default Search

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
`