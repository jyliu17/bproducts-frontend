import React, { useState} from "react";
import { NavLink, useHistory } from "react-router-dom";
import Dropdown from "./Dropdown"

function NavBar({ currentUser, setCurrentUser}) {

  const[click, setClick] = useState(false)
  const[dropdown, setDropdown] = useState(false)
  const history = useHistory();

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  function logout() {
    setCurrentUser(null);
    history.push('/login');
  }
 
  
  return (
    <header>
      <div>
      <img className="logo" src="../mainLogo.png" alt=""/>
        {currentUser ?  (
          <>
            <h1 className="welcome" >Welcome {currentUser.username}!</h1>
            <NavLink to="/profile">My Profile</NavLink>
            <NavLink to="/favorites">My Favorites</NavLink>

            <div 
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
            <NavLink to="/products">Products</NavLink>
            {dropdown && <Dropdown />}
            </div>

            <button className="logout" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
            <div
            className='nav-item' 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
            <NavLink to="/products">Products</NavLink>
            {dropdown && <Dropdown />}
            </div>
          </>
          )}

      </div>
    </header>
  );
}

export default NavBar;
