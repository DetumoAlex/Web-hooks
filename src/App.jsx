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
import { useSelector } from "react-redux";
import Home from "./pages/Home";

// import CartItems from "./components/CartItems";

const App = () => {
  const token = useSelector((state) => state.auth.token);
  console.log(token);

  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        {!token ? (
          <>
            {/* <Route path="/sign-in" element={<SignIn />} /> */}
            <Route path="/" element={<Navigate to="/sign-in" />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="*" element={<Navigate to="/SignIn" />} /> */}
          </>
        ) : (
          <>
            <Route path="/" element={<MainLayout />}>
              <Route path="/product" element={<Product />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/transaction" element={<Transaction />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/overview" element={<Home/>} />
            </Route>
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
