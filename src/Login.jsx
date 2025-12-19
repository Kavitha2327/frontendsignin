import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const display = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://backend-25d4.onrender.com//login", {
        userName,
        password,
      });
      console.log(res.data);
      setUserName("");
      setPassword("");
    } catch (err) {
      console.log(err.response.data);
      setUserName("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="form-container">
        <div id="form">
          <form onSubmit={display} id="">
            <h1>Login </h1>
            <label>Username</label>
            <br></br>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            ></input>
            <br></br>
            <br></br>
            <label>Password</label>
            <br></br>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
            <br></br>
            <br></br>
            <button type="submit">Submit</button>
          </form>
          <Link to="/forget">
            <button id="log">Forget Password</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
