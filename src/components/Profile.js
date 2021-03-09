import React, { useState } from "react";

function Profile({ currentUser, setCurrentUser }) {

  const [username, setUsername] = useState(currentUser.username)
  const [password, setPassword] = useState(currentUser.password)
  const [email, setEmail] = useState(currentUser.email);
  
  const formData = {
    username: username,
    password: password,
    email: email,
  }

 

  function handleSubmit(e) {
    e.preventDefault();

    // PATCH /me { image, bio }
    const token = localStorage.getItem("token");
    fetch(`${process.env.REACT_APP_RAILS_URL}/users/${currentUser.id}`, {
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
      <h2> {currentUser.username}'s profile</h2>

      <label>Username</label>
      <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      
      <label>Password</label>
      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      

      <label>Email</label>
      <textarea type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

      <button>Update</button> 
    </form>
  );
}

export default Profile;