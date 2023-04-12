import axios from "axios";

 function Home({Card,items,search,close,searchValue,setSearchValue,onChangeSearchInput,setCartItems}){
  
  return (        
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
)
 }

 export default Home;