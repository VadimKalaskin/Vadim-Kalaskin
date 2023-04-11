import search from './img/Search.svg';
import close from './img/close.svg';

//components
import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Cart from './components/Cart';
import Header from './components/Header';

// https://642c3132208dfe25472a75cf.mockapi.io/items
// https://6432452bd0127730d2cf7e01.mockapi.io/cart

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  React.useEffect(() => {
    axios
      .get('https://642c3132208dfe25472a75cf.mockapi.io/items')
      .then((res) => setItems(res.data));
    axios
      .get('https://6432452bd0127730d2cf7e01.mockapi.io/cart')
      .then((res) => setCartItems(res.data));
    console.log('i fire once');
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <Header
        onClickCart={() => {
          setCartOpened(true);
        }}
        totalPrice={cartItems.reduce((acc, item) => acc + item.price, 0)}
      />
      {cartOpened && (
        <Cart
          items={cartItems}
          onClickClose={() => {
            setCartOpened(false);
          }}
          onDelete={(id) => {
            axios.delete(`https://6432452bd0127730d2cf7e01.mockapi.io/cart/${id}`);
            setCartItems((prev) => prev.filter((item) => item.id !== id));
          }}
          totalPrice={cartItems.reduce((acc, item) => acc + item.price, 0)}
        />
      )}
      <div className="content">
        <div className="d-flex justify-content-between align-items-center">
          <h2> {searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h2>
          <div className="search-block">
            <img src={search} alt="Search" />
            <input placeholder="Поиск..." onChange={onChangeSearchInput} value={searchValue} />
            {searchValue && (
              <img
                src={close}
                alt="Close"
                className="close"
                onClick={() => {
                  setSearchValue('');
                }}
              />
            )}
          </div>
        </div>
        <div className="row">
          {items.map((obj) => (
            <Card
              key={obj.imageUrl}
              name={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onPlus={(item) => {
                setCartItems((prev) => [...prev, item]);
                axios.post('https://6432452bd0127730d2cf7e01.mockapi.io/cart', {
                  name: obj.name,
                  price: obj.price,
                  imageUrl: obj.imageUrl,
                });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
