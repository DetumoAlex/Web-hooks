import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import ProductDetail from "./components/ProductDetail";
import MainLayout from "./components/MainLayout";
import Home from './pages/Home'
import "./App.css"
import Transaction from './pages/Transaction'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<MainLayout />}>
          <Route index path='/' element={<Home/>}/>
            <Route path="product" element={<Product />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="transaction" element={<Transaction/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
