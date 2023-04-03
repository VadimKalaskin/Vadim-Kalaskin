
import search from './img/Search.svg'
//components
import Card from './components/Card';
import Cart from './components/Cart';
import Header from './components/Header';







function App() {
  return (
    <div className="container mt-5">
      <Header />
      <Cart/>
      <div className="content">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Все кроссовки</h2>
          <div className="search-block">
            <img src={search} alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
