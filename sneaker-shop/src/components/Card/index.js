import React from 'react';
import styles from './Card.module.scss';

import addToHeart from '../../img/addToHeart.svg';
import addedToHeart from '../../img/addedToHeart.svg';

import addToCart from '../../img/addToCart.svg';
import addedToCart from '../../img/addedToCart.svg';

function Card({ name, imageUrl, price, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onPlus({ name, imageUrl, price });
  };
  const onClickHeart = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.item_card + ' col-lg-3 col-md-4 col-sm-6 col-xs-12'}>
      <img
        className={styles.like}
        src={!isFavorite ? addToHeart : addedToHeart}
        alt="Unliked"
        onClick={onClickHeart}
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
