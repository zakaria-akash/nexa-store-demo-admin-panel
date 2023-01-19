import { useEffect, useState } from "react";
import { CardList } from "../card-list/card-list.component";
import { SearchBox } from "../search-box/search-box.component";

const ShowAllProducts = () => {
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
    <div>
      <SearchBox
        placeholder="search product by name or category"
        handleChange={handleChange}
      />

      <CardList products={filteredProducts} />
    </div>
  );
};

export default ShowAllProducts;
