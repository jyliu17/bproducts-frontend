import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({setCurrentUser}) {
    

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault()
    
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then(userObj => {
        if (userObj.errors) {
          setErrors(userObj.errors)
        } else {
          setCurrentUser(userObj)
          history.push(`/products`);
        }
        })
    }

    function handleChange(event){
        setFormData({ ...formData, [event.target.name]: event.target.value });
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