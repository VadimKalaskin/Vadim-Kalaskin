import search from './img/Search.svg';
//components
import Card from './components/Card';
import Cart from './components/Cart';
import Header from './components/Header';

const arr = [
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12990,
    imageUrl: '/images/image5.png',
  },
  { name: 'Мужские Кроссовки Nike Air Max 270', price: 15590, imageUrl: '/images/image5-1.png' },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Beige',
    price: 11990,
    imageUrl: '/images/image5-2.png',
  },
  { name: 'Кроссовки Puma X Aka Boku Future Rider', price: 6890, imageUrl: '/images/image5-3.png' },
];

function App() {
  return (
    <div className="container mt-5">
      <Header />
      <Cart />
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
            <Card name={obj.name} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
