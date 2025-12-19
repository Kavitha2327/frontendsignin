// import { useState } from "react";

function Store() {
  const categories = [
    { name: "Books", totalProducts: 30, image: "./src/pics/books.jfif" },
    { name: "Mobiles", totalProducts: 35, image: "./src/pics/mob.jfif" },
    { name: "Groceries", totalProducts: 40, image: "./src/pics/groc.jfif" },
    { name: "Skincare", totalProducts: 20, image: "./src/pics/skin.jfif" },
  ];

  return (
    <div>
      <div id="bookContainer" style={{ display: "flex", flexWrap: "wrap" }}>
        {categories.map((item, index) => (
          <div key={index} className="card">
            <img
              src={item.image}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
            <h3>{item.name}</h3>
            <p>Name: {item.name}</p>
            <p>Total Products: {item.totalProducts}</p>

            <button onClick={() => console.log("Buy", index)}>
              View Products
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
