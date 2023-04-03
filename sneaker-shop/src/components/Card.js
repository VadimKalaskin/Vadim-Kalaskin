import addToHeart from '../img/addToHeart.svg';
import addedToHeart from '../img/addedToHeart.svg';

import addToCart from '../img/addToCart.svg';
import addedToCart from '../img/addedToCart.svg';

function Card(props) {
  return (
    <div className="item_card col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <img className="like" src={addToHeart} alt="Unliked" />
      <img className="card_img" src={props.imageUrl} alt={props.name} />
      <h4 className="card_title">{props.name}</h4>
      <div className="price_wrapper">
        <div className="card_price">
          <span>ЦЕНА:</span>
          <span>{props.price} руб.</span>
        </div>
        <button className="item_addToCart btn">
          <img src={addToCart} alt="Добавить в корзину" />
        </button>
      </div>
    </div>
  );
}

export default Card;
