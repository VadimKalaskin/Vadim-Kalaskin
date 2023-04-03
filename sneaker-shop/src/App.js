import logo from './img/logo.png'
import cart from './img/cart.svg'
import heart from './img/heart.svg'
import user from './img/user.svg'
import addToCart from './img/addToCart.svg'
import addedToCart from './img/addedToCart.svg'
import nike1 from './img/Nike Blazer Mid Suede.jpg'
import search from './img/Search.svg'
import addToHeart from './img/addToHeart.svg'
import addedToHeart from './img/addedToHeart.svg'
import close from './img/close.svg'






function App() {
  return (
    <div className="container mt-5">

      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>
            <div className="items">
              <div className="cart-item">
                <img className="cart-item-img" src={nike1} />
                <div>
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <p>12 999 руб.</p>
                  </div>
                  <img className="close-btn" src={close} alt="close" />
              </div>
              <div className="cart-item">
                <img className="cart-item-img" src={nike1} />
                <div>
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <p>12 999 руб.</p>
                  </div>
                  <img className="close-btn" src={close} alt="close" />
              </div>
            </div>
            <ul>
              <li className="list-unstyled d-flex justify-content-between"><span>Итого:</span><div></div><b>24 590 руб.</b></li>
              <li className="list-unstyled d-flex justify-content-between"><span>В т.ч. налог 5%:</span><div></div><b>2000 руб.</b></li>
            </ul>
            <button className="btn btn-success">Оформить заказ</button>
        </div>
      </div>

      <header className="header d-flex justify-content-between align-items-center">
        <div className="header_col d-flex justify-content-center align-items-center">
          <div className="header_logo me-3"><img src={logo} alt="" /></div>
          <div className="header_info">
            <h1>REACT SNEAKERS</h1>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="header_col d-flex justify-content-center align-items-center">
          <div className="header_cart">
            <img src={cart} alt="cart" />
          </div>
          <div className="header_price"><span>12500</span> руб.</div>
          <div className="header_heart">
            <img src={heart} alt="Heart" />
          </div>
          <div className="header_user">
            <img src={user} alt="user" />
          </div>
        </div>
      </header>
      <div className="content">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Все кроссовки</h2>
          <div className="search-block">
            <img src={search} alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="row">
          <div className="item_card col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <img className="like" src={addToHeart} alt="Unliked" />
            <img className="card_img" src={nike1} alt="" />
            <h4 className="card_title">Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="price_wrapper"><div className="card_price">
              <span>ЦЕНА:</span><span>12 999 руб.</span>
            </div>
            <button className="item_addToCart btn"><img src={addToCart} alt="Добавить в корзину" /></button></div>
            
            {/* <button className="item_addToHeart btn"><img src={addedToCart} alt="" /></button> */}
          </div>
          <div className="item_card col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <img className="like" src={addToHeart} alt="Unliked" />
            <img className="card_img" src={nike1} alt="" />
            <h4 className="card_title">Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="price_wrapper"><div className="card_price">
              <span>ЦЕНА:</span><span>12 999 руб.</span>
            </div>
            <button className="item_addToCart btn"><img src={addToCart} alt="Добавить в корзину" /></button></div>
            
            {/* <button className="item_addToHeart btn"><img src={addedToCart} alt="" /></button> */}
          </div>
          <div className="item_card col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <img className="like" src={addToHeart} alt="Unliked" />
            <img className="card_img" src={nike1} alt="" />
            <h4 className="card_title">Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="price_wrapper"><div className="card_price">
              <span>ЦЕНА:</span><span>12 999 руб.</span>
            </div>
            <button className="item_addToCart btn"><img src={addToCart} alt="Добавить в корзину" /></button></div>
            
            {/* <button className="item_addToHeart btn"><img src={addedToCart} alt="" /></button> */}
          </div>
          <div className="item_card col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <img className="like" src={addToHeart} alt="Unliked" />
            <img className="card_img" src={nike1} alt="" />
            <h4 className="card_title">Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="price_wrapper"><div className="card_price">
              <span>ЦЕНА:</span><span>12 999 руб.</span>
            </div>
            <button className="item_addToCart btn"><img src={addToCart} alt="Добавить в корзину" /></button></div>
            
            {/* <button className="item_addToHeart btn"><img src={addedToCart} alt="" /></button> */}
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
