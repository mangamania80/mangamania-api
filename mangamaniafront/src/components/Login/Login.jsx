 import React, { useState }  from "react";
 
 
 function Login({ authenticated, login}) {
    const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");

     const handleClick = () => {
        try {
          login({ username, password });
        } catch (e) {
          alert("Failed to login");
          setUsername("");
          setPassword("");
        }
      };

  return (
    <>
      <h1>Login</h1>

      <br></br>

      <p>Rellene estos campos para iniciar sesión</p>


      <input
        value={username}
        onChange={({ target: { value } }) => setUsername(value)}
        type="text"
        placeholder="usuario"
      />

      <input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="contraseña"
      />

      <button onClick={handleClick}>Login</button>
    </>

  );

 }

 export default Login;

