import { useState } from "react";

function FormTwo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const formDeets = {
    Name: name,
    Email: email,
    PhoneNumber: phone,
  };

  function display(e) {
    e.preventDefault;
    console.log(formDeets);
  }

  return (
    <>
      <form>
        <h2>Enter the details</h2>
        <label>Name</label>
        <br></br>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input><br></br> <br></br>
        <label>Email</label>
        <br></br>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input><br></br> <br></br>
        <label>Phone Number</label>
        <br></br>
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        ></input><br></br> <br></br>
        <button onClick={display}>click to submit</button>
      </form>
    </>
  );
}

export default FormTwo