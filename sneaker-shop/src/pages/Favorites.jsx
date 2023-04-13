import axios from "axios";
import React from "react";
import Card from "../components/Card";


function Favorites( {favoriteItems, cartItems, setCartItems}) {


  return(
      <div className="row mt-5">
        <h2>Мои закладки</h2>
          {favoriteItems.map((obj) => (
      <Card
        key={obj.imageUrl}
        favorited={true}
        name={obj.name}
        price={obj.price}
        imageUrl={obj.imageUrl}
        onPlus={(item) => {
          setCartItems((prev) => [...prev, item]);
          axios.post('https://6432452bd0127730d2cf7e01.mockapi.io/cart', {
            name: obj.name,
            price: obj.price,
            imageUrl: obj.imageUrl,
          });
        }}
      />
    ))}
      </div>
  );
};

export default Favorites;