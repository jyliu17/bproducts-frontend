import React, { useState} from "react";
import { NavDropdown, Nav } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import Dropdown from "./Dropdown"
import Navbar from "react-bootstrap/Navbar"


function NavBar({ currentUser, setCurrentUser}) {

  // const[click, setClick] = useState(false)
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
      { currentUser ?
      <div> 
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <img className="logo" src="../mainLogo.png" alt=""/>
        <Navbar.Brand href="/home">Baby On Board</Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
        <Nav className="mr-auto">
        <Nav.Link href="/profile">My Profile</Nav.Link>
        <Nav.Link href="/favorites">Favorites</Nav.Link>
        <NavDropdown title="Products" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/products">All</NavDropdown.Item>
          <NavDropdown.Item href="/strollers">Strollers</NavDropdown.Item>
          <NavDropdown.Item href="/carseats">Carseats</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Nav>
        <Nav.Link className="logout" onClick={logout}>Logout</Nav.Link>
        {/* <button className="logout" onClick={logout}>Logout</button> */}
        </Nav>
        {/* </Navbar.Collapse> */}
      </Navbar>
      </div> :
      <div> 
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <img className="logo" src="../mainLogo.png" alt=""/>
        <Navbar.Brand href="/home">Title</Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
        <Nav className="mr-auto">
        <Nav.Link href="/profile">My Profile</Nav.Link>
        <Nav.Link href="/favorites">Favorites</Nav.Link>
        <NavDropdown title="Products" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/products">All</NavDropdown.Item>
          <NavDropdown.Item href="/strollers">Strollers</NavDropdown.Item>
          <NavDropdown.Item href="/carseats">Carseats</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Nav>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Signup</Nav.Link>
        </Nav>
        {/* </Navbar.Collapse> */}
      </Navbar>
      </div>  
      }



      {/* <div>

        {currentUser ?  (
          <>
            <h1 className="welcome" >Welcome {currentUser.username}!</h1>
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/profile">My Profile</NavLink>
            <NavLink to="/favorites">My Favorites</NavLink>
            <div 
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
            <NavLink to="/products">Products </NavLink>
            {dropdown && <Dropdown />}
            </div>

            <button className="logout" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/"> Home</NavLink>
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

      </div> */}
    </header>
  );
}

export default NavBar;
