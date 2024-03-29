import React, { useState, useContext } from "react";
import userContext from "../context/UserContext";

function Login() {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ age, setAge ] = useState("");

  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password, age})
    console.log('submitted')
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value) }
      />
      {" "}
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value) }
      />
      {" "}
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value) }
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
