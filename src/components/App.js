import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import ProductsList from "./ProductsList";
// import BakerPage from "./BakerPage";
// import Favorites from "./Favorites";
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./Signup";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../redux/productSlice";

function App() {

  const dispatch = useDispatch()
  const [currentUser, setCurrentUser] = useState(null)

  const API = "http://localhost:3000/products";
  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(productObj => {
      dispatch(addProducts(productObj))
    })
  }, [dispatch])



  return (
    <>
    <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}></NavBar>
    <main>
      <Switch>
        <Route path="/login">
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
        <Route path="/profile">
          <Profile currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
        <Route path="/signup">
          <Signup currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/products/:id">
          {/* <BakerPage handleUpdateBaker={handleUpdateBaker} currentUser={currentUser} /> */}
        </Route>
        <Route path="/products">
          <ProductsList 
            // bakersState={filteredBakers}
            // bakerSearch={bakerSearch}
            // setBakerSearch={setBakerSearch}
            // handleAddBaker={handleAddBaker}
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
