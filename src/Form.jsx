import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const formDetails = {
    name: name,
    roll: roll,
    email: email,
    phone: phone,
    address: address,
  };

  function display(e) {
    e.preventDefault();
    console.log(formDetails);
  }

  return (
    <>
      <form className="form">
        <h2>Enter your details</h2>
        <label>Name</label>
        <br></br>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <br></br>
        <br></br>
        <label>Roll Number</label>
        <br></br>
        <input
          type="text"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          required
        ></input>
        <br></br> <br></br>
        <label>Email</label>
        <br></br>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <br></br> <br></br>
        <label>Phone Number</label>
        <br></br>
        <input
          name="phone"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        ></input>
        <br></br> <br></br>
        <label>Address</label>
        <br></br>
        <input
          name="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        ></input>
        <br></br>
        <br></br>
        <button onClick={display}>Submit</button>
      </form>
    </>
  );
}

export default Form;
