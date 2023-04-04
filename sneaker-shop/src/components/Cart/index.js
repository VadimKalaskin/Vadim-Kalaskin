import nike1 from '../../img/Nike Blazer Mid Suede.jpg'
import close from '../../img/close.svg'

import styles from './Cart.module.scss';

function Cart(props) {
  console.log(styles);
    return(
        <div className={styles.overlay}>
        <div className={styles.drawer}>
          <div className="d-flex align-items-center justify-content-between mb-4 drawer-title-wrapper">
            <h2>Корзина</h2>
            <button className={styles.close_btn} onClick={props.onClickClose}><img src={close} alt="" /></button>
          </div>
            <div className={styles.items}>
              <div className={styles.cart_item}>
                <img className={styles.cart_item_img} src={nike1} alt="nike111" />
                <div>
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <p>12 999 руб.</p>
                  </div>
                  <img className={styles.close_btn} src={close} alt="close" />
              </div>
              <div className={styles.cart_item}>
                <img className={styles.cart_item_img} src={nike1} alt="nike123" />
                <div>
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <p>12 999 руб.</p>
                  </div>
                  <img className={styles.close_btn} src={close} alt="close" />
              </div>
            </div>
            <ul>
              <li className="list-unstyled d-flex justify-content-between"><span>Итого:</span><div></div><b>24 590 руб.</b></li>
              <li className="list-unstyled d-flex justify-content-between"><span>В т.ч. налог 5%:</span><div></div><b>2000 руб.</b></li>
            </ul>
            <button className={styles.btnSuccess + " btn btn-success"}>Оформить заказ</button>
        </div>
      </div>

    )
}

export default Cart;