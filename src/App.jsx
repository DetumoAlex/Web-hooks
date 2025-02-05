import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import ProductDetail from "./components/ProductDetail";
import MainLayout from "./components/MainLayout";
import Home from './components/Home'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route index path='/' element={<Home/>}/>
            <Route path="/product" element={<Product />}>
              <Route path=":/id" element={<ProductDetail />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
