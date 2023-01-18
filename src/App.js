import { useEffect, useState } from "react";
import { CardList } from "./component/card-list/card-list.component";
import { SearchBox } from "./component/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchField, setSearchField] = useState("");
  // const fetchItems = async () => {
  //   const data = await fetch("https://fakestoreapi.com/products");
  //   const items = await data.json();
  //   setAllProducts(items);
  // };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((items) => setAllProducts(items));
  }, []);
  const handleChange = (e) => {
    setSearchField(e.target.value);
    e.preventDefault();
  };

  const filteredProducts = allProducts.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchField.toLowerCase()) ||
      product.category.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  return (
    <div className="App">
      <h1>Nexa Store Admin Panel</h1>
      <SearchBox
        placeholder="search product by name or category"
        handleChange={handleChange}
      />

      <CardList products={filteredProducts} />
      <button>Add New Product</button>
    </div>
  );
};

export default App;
