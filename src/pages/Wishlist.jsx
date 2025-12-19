const Wishlist = ({ wishlist, goHome }) => {
  return (
    <>
      <header>
        <h1>Your Wishlist</h1>
        <button onClick={goHome}>Back</button>
      </header>

      <div id="wishlistContainer">
        {wishlist.map((book) => (
          <div className="card" key={book.id}>
            <img src={book.image} id="image" />
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>₹ {book.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Wishlist;
