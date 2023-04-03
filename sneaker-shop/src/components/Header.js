import logo from '../img/logo.png'
import cart from '../img/cart.svg'
import heart from '../img/heart.svg'
import user from '../img/user.svg'

function Header () {
    return (
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
    )
}
export default Header;