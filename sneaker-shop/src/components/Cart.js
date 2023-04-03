
import nike1 from '../img/Nike Blazer Mid Suede.jpg'
import close from '../img/close.svg'

function Cart() {
    return(

        <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
          <div className="d-flex align-items-center justify-content-between mb-4 drawer-title-wrapper">
            <h2>Корзина</h2>
            <button className=""><img src={close} alt="" /></button>
          </div>
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

    )
}

export default Cart;