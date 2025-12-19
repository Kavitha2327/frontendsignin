import { useState } from "react";
import books from "../data/books";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

const Home = ({ wishlist, setWishlist, goToWishlist }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleWishlist = (book) => {
    if (!wishlist.find((item) => item.id === book.id)) {
      setWishlist([...wishlist, book]);
    }
  };

  const filteredBooks = books.filter((b) =>
    b.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        goToWishlist={goToWishlist}
      />
      <div id="bookContainer">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} handleWishlist={handleWishlist} />
        ))}
      </div>
    </>
  );
};

export default Home;
