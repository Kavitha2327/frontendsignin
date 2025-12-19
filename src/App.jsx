import Signin from "./Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Forget from "./forget";
import Excel from "./excel";
import Upload from "./excel";
import HomePage from "./HomePage";

function App() {
  return (
    <>
      {/* <HomePage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<Forget />} />
        </Routes>
      </BrowserRouter>
      {/* <Upload /> */}
    </>
    //<Excel />
  );
}

export default App;

// import { useState } from "react";
// import Header from "./components/Header";
// import Home from "./pages/Home";
// import Wishlist from "./pages/Wishlist";

// const App = () => {
//   const [page, setPage] = useState("home");
//   const [wishlist, setWishlist] = useState([]);

//   return (
//     <>
//       <Header />
//       {page === "home" && (
//         <Home
//           wishlist={wishlist}
//           setWishlist={setWishlist}
//           goToWishlist={() => setPage("wishlist")}
//         />
//       )}
//       {page === "wishlist" && (
//         <Wishlist wishlist={wishlist} goHome={() => setPage("home")} />
//       )}
//     </>
//   );
// };

// export default App;
