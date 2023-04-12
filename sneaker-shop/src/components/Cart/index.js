import close from '../../img/close.svg';

import styles from './Cart.module.scss';

function Cart({ onClickClose, items = [], onDelete, totalPrice = 0 }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className="d-flex align-items-center justify-content-between mb-4 drawer-title-wrapper">
          <h2>Корзина</h2>
          <button className={styles.close_btn} onClick={onClickClose}>
            <img src={close} alt="" />
          </button>
        </div>
        {items.length > 0 ? (
          <div className={styles.itemsWrapper}>
            <div className={styles.items}>
              {items.map((obj) => (
                <div className={styles.cart_item}>
                  <img className={styles.cart_item_img} src={obj.imageUrl} alt={obj.name} />
                  <div>
                    <p>{obj.name}</p>
                    <p>{`${obj.price} руб.`}</p>
                  </div>
                  <img
                    className={styles.close_btn}
                    src={close}
                    alt="close"
                    onClick={() => onDelete(obj.id)}
                  />
                </div>
              ))}
            </div>
            <ul>
              <li className="list-unstyled d-flex justify-content-between">
                <span>Итого:</span>
                <div className={styles.space}></div>
                <b>{totalPrice} руб.</b>
              </li>
              <li className="list-unstyled d-flex justify-content-between">
                <span>В т.ч. налог 5%:</span>
                <div className={styles.space}></div>
                <b>{(totalPrice / 100) * 5} руб.</b>
              </li>
            </ul>
            <button className={styles.btnSuccess + ' btn btn-success'}>Оформить заказ</button>
          </div>
        ) : (
          <div className={styles.cart_empty}>
            <h2>Корзина пуста :(</h2>
            <h3 className={styles.cart_emptyButton} onClick={onClickClose}>
              Вернуться к каталогу!
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
