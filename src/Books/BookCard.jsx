import { useState } from "react";
import "./BookCard.css";
const BookCard = ({
  title,
  author,
  price,
  inStock,
  genre,
  id,
  isFavorite,
  onEventHandler,
  onToggleStock,
  onToggleFavorite,
  onChangePrice,
}) => {
  // const clickHandler=()=>{
  //     setFavorite(!favorite);
  //     isFavorite=!isFavorite;
  // }
  const [priceValue, setPrice] = useState(price);
  const eventHandler = () => {
    console.log("WOW");
  };
  return (
    <div className="card">
      <div className="favorite" onClick={() => onToggleFavorite(id)}>
        {isFavorite ? "⭐" : "★"}
      </div>
      <h2> {title} </h2>

      <p>--- {author} --- </p>
      <p className="price">
        € {price}{" "}
        <input
          type="number"
          step="0.01"
          min="0"
          onChange={(e) => onChangePrice(id,e)}
        />
      </p>
      {/* <button onClick={()=>onToggleStock(id)}>Change Stock</button>
            <button onClick={()=>onToggleFavorite(id)}>Change favorite</button> */}
      <p
        style={{ color: inStock ? "#53bf33" : "red" }}
        onClick={() => onToggleStock(id)}
      >
        {inStock ? "In Stock" : "Out of stock"}{" "}
      </p>

      <p>{genre} </p>
      <p>ID: {id} </p>
      {inStock && (
        <button className="wishList" onClick={eventHandler}>
          Add to wishlist
        </button>
      )}
      <button onClick={() => onEventHandler(id)}>Read more</button>
    </div>
  );
};
export default BookCard;
