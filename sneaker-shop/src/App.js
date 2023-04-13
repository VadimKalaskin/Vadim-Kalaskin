import search from './img/Search.svg';
import close from './img/close.svg';

//components
import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Cart from './components/Cart';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
// https://642c3132208dfe25472a75cf.mockapi.io/items
// https://6432452bd0127730d2cf7e01.mockapi.io/cart
// https://6432452bd0127730d2cf7e01.mockapi.io/favorites

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
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
        <Routes>
          <Route path="/123" exact element={<Home Card={Card} items={items} setCartItems={setCartItems} search={search} close={close} searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput} />} />
          {/* <Route path="/favorites" exact element={<Favorites />}/>
          <Route path="*" element={<h1> Not Found or You do not have permission.</h1>}/> */}
        </Routes>
      </div>
  );
}

export default App;
