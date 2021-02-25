import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
// import BakersList from "./BakersList";
// import BakerPage from "./BakerPage";
import Favorites from "./Favorites";
import Login from "./Login";
import Signup from "./Signup";
import { useDispatch, useSelector } from "react-redux";

function App() {


  const API = "http://localhost:3000/products";
  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(festivalObjs => {
      dispatch(addFests(festivalObjs))
    })
  }, [dispatch])



  return (
    <>
    <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}></NavBar>
    <main>
      <Switch>
        <Route path="/login">
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/signup">
          <Signup currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/products/:id">
          <BakerPage handleUpdateBaker={handleUpdateBaker} currentUser={currentUser} />
        </Route>
        <Route path="/bakers">
          <BakersList bakersState={filteredBakers}
            bakerSearch={bakerSearch}
            setBakerSearch={setBakerSearch}
            handleAddBaker={handleAddBaker}
            handleFormClick={handleFormClick}
            setShowForm={setShowForm}
            showForm={showForm}
            onAdded={handleAddFav}
            onRemoved={handleRemoveFav}
            currentUser={currentUser}
            favs={favs}
          />
        </Route>
        <Route path="/favorites">
          <Favorites
            key='myFav'
            onRemoveFromFav={onRemoveFromFav}
            currentUser={currentUser}
            favs={favs}
            setFavs={setFavs}
            />
        </Route>
      </Switch>
    </main>
  </>
  );
}

export default App;
