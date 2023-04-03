import logo from './img/logo.png'
import cart from './img/cart.svg'
import heart from './img/heart.svg'
import user from './img/user.svg'
import addToCart from './img/addToCart.svg'
import addedToCart from './img/addedToCart.svg'
import nike1 from './img/Nike Blazer Mid Suede.jpg'




function App() {
  return (
    <div className="container mt-5">
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
            <img src={cart} alt="" />
          </div>
          <div className="header_price"><span>12500</span> руб.</div>
          <div className="header_heart">
            <img src={heart} alt="" />
          </div>
          <div className="header_user">
            <img src={user} alt="" />
          </div>
        </div>
      </header>
      <div className="content">
        <h2>Все кроссовки</h2>
        <div className="row">
          <div className="item_card col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <img className="card_img" src={nike1} alt="" />
            <h4 className="card_title">Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="price_wrapper"><div className="card_price">
              <span>ЦЕНА:</span><span>12 999 руб.</span>
            </div>
            <button className="item_addToCart btn"><img src={addToCart} alt="Добавить в корзину" /></button></div>
            
            {/* <button className="item_addToHeart btn"><img src={addedToCart} alt="" /></button> */}
          </div>
          <div className="item_card col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <img className="card_img" src={nike1} alt="" />
            <h4 className="card_title">Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="price_wrapper"><div className="card_price">
              <span>ЦЕНА:</span><span>12 999 руб.</span>
            </div>
            <button className="item_addToCart btn"><img src={addToCart} alt="Добавить в корзину" /></button></div>
            
            {/* <button className="item_addToHeart btn"><img src={addedToCart} alt="" /></button> */}
          </div>
          <div className="item_card col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <img className="card_img" src={nike1} alt="" />
            <h4 className="card_title">Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="price_wrapper"><div className="card_price">
              <span>ЦЕНА:</span><span>12 999 руб.</span>
            </div>
            <button className="item_addToCart btn"><img src={addToCart} alt="Добавить в корзину" /></button></div>
            
            {/* <button className="item_addToHeart btn"><img src={addedToCart} alt="" /></button> */}
          </div>
          <div className="item_card col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <img className="card_img" src={nike1} alt="" />
            <h4 className="card_title">Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="price_wrapper"><div className="card_price">
              <span>ЦЕНА:</span><span>12 999 руб.</span>
            </div>
            <button className="item_addToCart btn"><img src={addToCart} alt="Добавить в корзину" /></button></div>
            
            {/* <button className="item_addToHeart btn"><img src={addedToCart} alt="" /></button> */}
          </div>
          <div className="item_card col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <img className="card_img" src={nike1} alt="" />
            <h4 className="card_title">Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="price_wrapper"><div className="card_price">
              <span>ЦЕНА:</span><span>12 999 руб.</span>
            </div>
            <button className="item_addToCart btn"><img src={addToCart} alt="Добавить в корзину" /></button></div>
            
            {/* <button className="item_addToHeart btn"><img src={addedToCart} alt="" /></button> */}
          </div>
          <div className="item_card col-lg-3 col-md-4 col-sm-6 col-xs-12">
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
