import { useState } from "react";
import axios from "axios";

function Forget() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  //   const [conPassword, setConPassword] = useState("");

  const display = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:9000/forget", {
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
            <h1>Update Password </h1>
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
            {/* <label>Confirm Password</label>
            <br></br>
            <input
              type="password"
              value={password}
              onChange={(e) => setConPassword(e.target.value)}
              required
            ></input>
            <br></br>
            <br></br> */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Forget;
