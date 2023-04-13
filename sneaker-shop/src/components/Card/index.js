import React from 'react';
import axios from 'axios';

import styles from './Card.module.scss';

import addToHeart from '../../img/addToHeart.svg';
import addedToHeart from '../../img/addedToHeart.svg';
import addToCart from '../../img/addToCart.svg';
import addedToCart from '../../img/addedToCart.svg';


function Card({ name, imageUrl, price, onPlus, favorited = false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);


  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onPlus({ name, imageUrl, price });
  };
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    axios.post('https://6432452bd0127730d2cf7e01.mockapi.io/favorites', {name, imageUrl, price});
    
  };

  return (
    <div className={styles.item_card + ' col-lg-3 col-md-4 col-sm-6 col-xs-12'}>
      <img
        className={styles.like}
        src={!isFavorite ? addToHeart : addedToHeart}
        alt="Unliked"
        onClick={() => onClickFavorite()}
      />
      <img className={styles.card_img} src={imageUrl} alt={name} />
      <h4 className={styles.card_title}>{name}</h4>
      <div className={styles.price_wrapper}>
        <div className={styles.card_price}>
          <span>ЦЕНА:</span>
          <span>{price} руб.</span>
        </div>
        <button
          onClick={() => {
            onClickPlus();
          }}
          className="item_addToCart btn"
        >
          <img src={!isAdded ? addToCart : addedToCart} alt="Добавить в корзину" />
        </button>
      </div>
    </div>
  );
}

export default Card;
