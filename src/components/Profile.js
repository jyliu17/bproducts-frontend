import React, { useState } from "react";

function Profile({ currentUser, setCurrentUser }) {

  
  const [formData, setFormData] = useState({
    username: currentUser.username,
    password: "",
    email: currentUser.email,
  });
  const { username, password, email } = formData;

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // PATCH /me { image, bio }
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/self", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((user) => {
        // update the user in state after getting the response
        setCurrentUser(user);
      });
  }


  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <h1> {currentUser.username}'s profile</h1>

      <label>Username</label>
      <input type="text" name="username" value={username} onChange={handleChange} />
      
      <label>Password</label>
      <input type="text" name="password" value={password} onChange={handleChange} />
      

      <label>Email</label>
      <textarea type="text" name="email" value={email} onChange={handleChange} />

      <input type="submit" value="Update" />
    </form>
  );
}

export default Profile;