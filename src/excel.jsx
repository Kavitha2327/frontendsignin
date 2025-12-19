import { useState } from "react";
import axios from "axios";

// function Excel() {
//   const [email, setEmail] = useState("");
//   const display = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:9000/user", { email });
//       console.log(res.data);
//       setEmail("");
//     } catch (err) {
//       console.log(err.response.data);
//     }
//   };
function Upload() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [imageURl, setImageUrl] = useState(null);

  const submit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", name);
    form.append("profile", file);
    const res = await axios.post("http://localhost:9000/upload", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(res.data);
    setName("");
    setFile("");
    setImageUrl("http://localhost:9000/" + res.data.profile);
    alert("File uploaded");
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Submit</button>
      </form>
      {imageURl && <p>{imageURl}</p>}
      {imageURl && <img src={imageURl} width={500}></img>}
    </>
  );
}
//   return (
//     <>
//       <form onSubmit={display}>
//         <label>Enter Email</label>
//         <br></br>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         ></input>
//         <br></br>
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

export default Upload;
