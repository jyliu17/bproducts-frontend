import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import ProductsList from "./ProductsList";
import ProductPage from "./ProductPage";
import FavoritesList from "./FavoritesList";
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./Signup";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../redux/productSlice";

function App() {

  const dispatch = useDispatch()
  const [currentUser, setCurrentUser] = useState(null)
  const [reviews, setReviews] = useState([])
  const [favorites, setFavorites] = useState([]);
  const [productSearch, setProductSearch] = useState("");
  const [filter, setFilter] = useState("all")

  const products = useSelector(state => state.product.products)



  // autologin
    useEffect(() => {
      // TODO: check if there'a token for the logged in user
      // GET /me
      const token = localStorage.getItem("token");
      if (token) {
        fetch("http://localhost:3000/self", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((r) => r.json())
          .then((user) => {
            // set the user in state
            setCurrentUser(user);
          });
      }
    }, []);

  const API = "http://localhost:3000/products";
  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(productObj => {
      dispatch(addProducts(productObj))
    })
  }, [dispatch])

  useEffect(() => {
    fetch(`http://localhost:3000/reviews`)
      .then((r) => r.json())
      .then((obj) => {
        setReviews(obj)
      }
      );
  }, []);

  useEffect(() => {
    if (currentUser) {
    fetch(`http://localhost:3000/users/${currentUser.id}`)
        .then(r => r.json())
        .then(userObj=> { 
            setFavorites(userObj.favorites)
          
        })
    }
  }, [currentUser]);

  function renderFavorites(obj) {
    const newFavs = [...favorites, obj];
    setFavorites(newFavs);
  }

  function handleAddFav(addedProduct) {
    // console.log(addedFavorite);
  
    let newFav = { user_id: currentUser.id, product_id: addedProduct.id };
    if (favorites.find(f => f.product.id === addedProduct.id)) {
      alert('The selected item already exists in your favorite!');
    } else {
      fetch(`http://localhost:3000/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFav),
      })
        .then(r => r.json())
        .then(favData => renderFavorites(favData))
    }
  };

  function handleAddFav(addedProduct) {
    // console.log(addedFavorite);
  
    let newFav = { user_id: currentUser.id, product_id: addedProduct.id };
    if (favorites.find(f => f.product.id === addedProduct.id)) {
      alert('The selected item already exists in your favorite!');
    } else {
      fetch(`http://localhost:3000/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFav),
      })
        .then(r => r.json())
        .then(favData => renderFavorites(favData))
    }
  };

  function handleRemoveFav(removedProduct) {
    if (favorites.length > 0) {
      let favToDelete = favorites.find(f => f.product_id === removedProduct.id);
      const id = favToDelete.id;
      // console.log(id);
      fetch(`http://localhost:3000/favorites/${id}`, {
        method: 'Delete',
      });
    };
    const removeArr = favorites.filter(f => f.product.id !== removedProduct.id)
    setFavorites(removeArr);
  };

function onRemoveFromFav(id) {
  //**optimistic rendering**
  const removeArr = favorites.filter(fav => fav.id !== id)
  setFavorites(removeArr);

  fetch(`http://localhost:3000/favorites/${id}`, {
    method: 'Delete',
  });
};



  function addReview(reviewObj) {
    const newReviewArray = [...reviews, reviewObj]
    setReviews(newReviewArray)
  }
  function removeReview(id){
    const newReviewArray = reviews.filter(review=>{return review.id !== id})
  setReviews(newReviewArray)
  }

  function updateReview(updatedReview) {
    const updatedReviewList = reviews.map((review) => {
      if (review.id === updatedReview.id) {
        return updatedReview;
      } else {
        return review;
      }
    });
 
    setReviews(updatedReviewList);
  } 
  const filteredProducts = products.filter((product) => {
    
    return product.name.toLowerCase().includes(productSearch.toLowerCase()) ||
    product.brand.toLowerCase().includes(productSearch.toLowerCase()) ||
    product.type_of.toLowerCase().includes(productSearch.toLowerCase()) 
  });


  return (
    <>
    <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}></NavBar>
    <main>
      <Switch>
        <Route path="/login">
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
        <Route path="/profile">
          {currentUser ?
          <Profile currentUser={currentUser} setCurrentUser={setCurrentUser}/> : 
          <h2>Please Login or create an account</h2>}
        </Route>
        <Route path="/signup">
          <Signup currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/products/:id">
          <ProductPage reviews={reviews} 
                       addReview={addReview} 
                       removeReview={removeReview} 
                       currentUser={currentUser}
                       updateReview={updateReview}/>
        </Route>
        <Route path="/products">
          <ProductsList 
            products={filteredProducts}
            productSearch={productSearch}
            setProductSearch={setProductSearch}
            handleAddFav={handleAddFav}
            handleRemoveFav={handleRemoveFav}
            currentUser={currentUser}
            favorites={favorites} 
            filter={filter} 
            setFilter={setFilter}
            // handleAddProduct={handleAddProduct}
            // handleFormClick={handleFormClick}
            // setShowForm={setShowForm}
            // showForm={showForm}
          />
        </Route>
        <Route path="/favorites">
          <FavoritesList
            key='myFav'
            currentUser={currentUser}
            onRemoveFromFav={onRemoveFromFav}
            favorites={favorites}
            setFavorites={setFavorites}
            />
        </Route>
      </Switch>
    </main>
  </>
  );
}

export default App;
