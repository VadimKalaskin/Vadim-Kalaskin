import search from './img/Search.svg';
//components
import React from 'react';
import Card from './components/Card';
import Cart from './components/Cart';
import Header from './components/Header';

// https://642c3132208dfe25472a75cf.mockapi.io/items

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://642c3132208dfe25472a75cf.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);

  return (
    <div className="container mt-5">
      <Header
        onClickCart={() => {
          setCartOpened(true);
        }}
      />
      {cartOpened && (
        <Cart
          items={cartItems}
          onClickClose={() => {
            setCartOpened(false);
          }}
        />
      )}
      <div className="content">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Все кроссовки</h2>
          <div className="search-block">
            <img src={search} alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="row">
          {items.map((obj) => (
            <Card
              name={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onPlus={(item) => {
                setCartItems((prev) => [...prev, item]);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
