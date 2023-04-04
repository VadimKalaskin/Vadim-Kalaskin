import close from '../../img/close.svg';

import styles from './Cart.module.scss';

function Cart({ onClickClose, items = [] }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className="d-flex align-items-center justify-content-between mb-4 drawer-title-wrapper">
          <h2>Корзина</h2>
          <button className={styles.close_btn} onClick={onClickClose}>
            <img src={close} alt="" />
          </button>
        </div>
        <div className={styles.items}>
          {items.map((obj) => (
            <div className={styles.cart_item}>
              <img className={styles.cart_item_img} src={obj.imageUrl} alt={obj.name} />
              <div>
                <p>{obj.name}</p>
                <p>{`${obj.price} руб.`}</p>
              </div>
              <img className={styles.close_btn} src={close} alt="close" />
            </div>
          ))}
        </div>
        <ul>
          <li className="list-unstyled d-flex justify-content-between">
            <span>Итого:</span>
            <div></div>
            <b>24 590 руб.</b>
          </li>
          <li className="list-unstyled d-flex justify-content-between">
            <span>В т.ч. налог 5%:</span>
            <div></div>
            <b>2000 руб.</b>
          </li>
        </ul>
        <button className={styles.btnSuccess + ' btn btn-success'}>Оформить заказ</button>
      </div>
    </div>
  );
}

export default Cart;
