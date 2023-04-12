import logo from '../../img/logo.png'
import cart from '../../img/cart.svg'
import heart from '../../img/heart.svg'
import user from '../../img/user.svg'

import styles from './Header.module.scss'

import { Link } from 'react-router-dom';



function Header (props) {
    return (
        <header className={styles.header + " d-flex justify-content-between align-items-center"}>
        <div className={styles.header_col + " d-flex justify-content-center align-items-center"}>
        <Link to={'/'}><div className="header_logo me-3"><img src={logo} alt="Logo" /></div></Link>
          <div className="header_info">
            <h1>REACT SNEAKERS</h1>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className={styles.header_col  + " d-flex justify-content-center align-items-center"}>
          <div className={styles.header_cart} onClick={props.onClickCart}>
            <img src={cart} alt="cart" />
          </div>
          <div className={styles.header_price} onClick={props.onClickCart}><span>{props.totalPrice}</span> руб.</div>
          <Link to={'/favorites'}>
            <div className={styles.header_heart}>
              <img src={heart} alt="Heart" />
            </div>
          </Link>
          <div className="header_user">
            <img src={user} alt="user" />
          </div>
        </div>
      </header>
    )
}
export default Header;