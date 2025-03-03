import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import MainLayout from "./components/MainLayout";
import "./App.css";
import Transaction from "./pages/Transaction";
import Checkout from "./pages/Checkout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// import CartItems from "./components/CartItems";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="SignIn" />} />
          <Route path="/SignIn" exact element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<MainLayout />}></Route>
          <Route path="/product" element={<MainLayout />}>
            <Route path="" element={<Product />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="transaction" element={<Transaction />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
<Route path="/" element={<Navigate to="SignIn" />} />;
