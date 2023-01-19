import { Button } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NewProductForm from "./component/new-product-form/new-product-form.component";
import ShowAllProducts from "./component/show-all-products/show-all-products.component";

const App = () => {
  return (
    <div className="App">
      <h1>Nexa Store Admin Panel</h1>
      <Link className="all-products" to="/show-all-products">
        <Button>Show All Products</Button>
      </Link>
      <Link className="all-products" to="/new-product-insert">
        <Button>Add New Product</Button>
      </Link>
      <Routes>
        <Route path="show-all-products" element={<ShowAllProducts />} />
        <Route path="new-product-insert" element={<NewProductForm />} />
      </Routes>
    </div>
  );
};

export default App;
