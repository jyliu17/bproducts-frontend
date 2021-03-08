import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({setCurrentUser}) {
    

  const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleChange(event){
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  function handleSubmit(event) {
        event.preventDefault()
    
    fetch(`${process.env.REACT_APP_RAILS_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then(userObj => {
       
        if (userObj.errors) {
          setErrors(userObj.errors)
        } else {
          setCurrentUser(userObj)
          localStorage.setItem("token", userObj.token)
          history.push(`/products`);
          console.log(userObj.user)
        }
        })
    }

  return (
        <div>
          <form onSubmit={handleSubmit} autoComplete="off">
            <h3>Login</h3>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.map((error) => {
              return <p key={error}>{error}</p>;
            })}
            <button type="submit" value="Login" >Login</button>
          </form>
        </div>
    );
}

export default Login