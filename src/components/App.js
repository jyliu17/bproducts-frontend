import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import ProductsList from "./ProductsList";
import ProductPage from "./ProductPage";
// import Favorites from "./Favorites";
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./Signup";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/productSlice";

function App() {

  const dispatch = useDispatch()
  const [currentUser, setCurrentUser] = useState(null)
  const [reviews, setReviews] = useState([])

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
          <ProductPage reviews={reviews} currentUser={currentUser}/>
        </Route>
        <Route path="/products">
          <ProductsList 
            // productSearch={productSearch}
            // setProductSearch={setProductSearch}
            // handleAddProduct={handleAddProduct}
            // handleFormClick={handleFormClick}
            // setShowForm={setShowForm}
            // showForm={showForm}
            // onAdded={handleAddFav}
            // onRemoved={handleRemoveFav}
            // currentUser={currentUser}
            // favs={favs}
          />
        </Route>
        <Route path="/favorites">
          {/* <Favorites
            key='myFav'
            onRemoveFromFav={onRemoveFromFav}
            currentUser={currentUser}
            favs={favs}
            setFavs={setFavs}
            /> */}
        </Route>
      </Switch>
    </main>
  </>
  );
}

export default App;
