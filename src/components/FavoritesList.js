import React, { useEffect, useState } from "react";
import FavoriteItem from "./FavoriteItem";

function FavoritesList({ onRemoveFromFav, currentUser, favorites, setFavorites, }) {



    const favoritesArray = favorites.map(fav => {

        return <FavoriteItem key={fav.id} 
                             favId={fav.id} 
                             product={fav.product} 
                             onRemoveFromFav={onRemoveFromFav}/>
        
    })
          


    return (
        <div>
            {favoritesArray}
        </div>
    )
 
};

export default FavoritesList;