import React, {  } from "react";
import FavoriteItem from "./FavoriteItem";
import styled from "styled-components"

function FavoritesList({ onRemoveFromFav, currentUser, favorites, setFavorites, }) {



    const favoritesArray = favorites.map(fav => {

        return <FavoriteItem key={fav.id} 
                             favId={fav.id} 
                             product={fav.product} 
                             onRemoveFromFav={onRemoveFromFav}/>
        
    })
          


    return (
        <div>
            <h1>My Favorites</h1>
            <Wrapper>
            {favoritesArray}
            </Wrapper>
        </div>
    )
 
};

export default FavoritesList;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`