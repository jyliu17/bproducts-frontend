import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function SignUp({ currentUser, setCurrentUser }) {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
      });
    const [errors, setErrors] = useState([]);
    const { username, password, email } = formData;
    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault()
        fetch("http://localhost:3000/signup", {
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
        <form onSubmit={handleSubmit} autoComplete="off">
          <h3>Signup</h3>
    
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
    
          {errors.map((error) => {
            return <p key={error}>{error}</p>;
          })}
          <button type="submit" value="Signup">Signup</button>
        </form>
      );

}

export default SignUp

