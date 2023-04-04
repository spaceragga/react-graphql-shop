import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import PizzasList from "./components/PizzasList";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Pizzas</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<PizzasList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  );
}

export default App;
