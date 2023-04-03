import addToHeart from '../img/addToHeart.svg'
import addedToHeart from '../img/addedToHeart.svg'

import addToCart from '../img/addToCart.svg'
import addedToCart from '../img/addedToCart.svg'

import nike1 from '../img/Nike Blazer Mid Suede.jpg'

 
 
 function Card() {
    return(
    <div className="item_card col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <img className="like" src={addToHeart} alt="Unliked" />
    <img className="card_img" src={nike1} alt="" />
    <h4 className="card_title">Мужские Кроссовки Nike Blazer Mid Suede</h4>
    <div className="price_wrapper"><div className="card_price">
      <span>ЦЕНА:</span><span>12 999 руб.</span>
    </div>
    <button className="item_addToCart btn"><img src={addToCart} alt="Добавить в корзину" /></button></div>
  </div>)

 }

 export default Card;