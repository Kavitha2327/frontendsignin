const BookCard = ({ book, handleWishlist }) => {
  return (
    <div className="card">
      <img src={book.image} id="image" />
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>₹ {book.price}</p>
      <button onClick={() => handleWishlist(book)}>Add to Wishlist</button>
    </div>
  );
};

export default BookCard;
