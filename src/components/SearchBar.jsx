const SearchBar = ({ searchInput, setSearchInput, goToWishlist }) => {
  return (
    <div id="nav">
      <input
        type="text"
        placeholder="Search book..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button>Search</button>
      <button id="wish" onClick={goToWishlist}>Wishlist</button>
    </div>
  );
};

export default SearchBar;
