import { useState } from "react";
import axios from "axios";
import Login from "./Login";
import { Link } from "react-router-dom";

function Signin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const display = async (e) => {
    e.preventDefault();

    const res = await axios.post("https://backend-25d4.onrender.com/data", {
      userName,
      password,
      email,
    });
    try {
      console.log(res.data);
      console.log("sign in success");
      setUserName("");
      setPassword("");
      setEmail("");
    } catch (err) {
      console.log(err);
      setUserName("");
      setPassword("");
      setEmail("");
    }
  };

  return (
    <>
      <div className="form-container">
        <div id="form">
          <form onSubmit={display} id="">
            <h1>Sign in </h1>
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
            <label>Email</label>
            <br></br>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div>
            <p id="par">Already a user</p>
            <Link to="/login">
              <button id="log">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
