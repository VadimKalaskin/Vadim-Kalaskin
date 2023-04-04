import search from './img/Search.svg';
//components
import React from 'react';
import Card from './components/Card';
import Cart from './components/Cart';
import Header from './components/Header';

const arr = [];
// https://642c3132208dfe25472a75cf.mockapi.io/items

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  return (
    <div className="container mt-5">
      <Header onClickCart={()=> {setCartOpened(true)}} />
      {cartOpened && <Cart onClickClose={()=> {setCartOpened(false)}}/>}
      <div className="content">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Все кроссовки</h2>
          <div className="search-block">
            <img src={search} alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="row">
          {arr.map((obj) => (
            <Card name={obj.name} price={obj.price} imageUrl={obj.imageUrl} onClickPlus={()=>{console.log('Нажали плюс')}} onClickHeart={()=>{console.log('Нажали сердце')}}/>
          ))}
        </div>
      </div>
    </div>
  )
};

export default App;
