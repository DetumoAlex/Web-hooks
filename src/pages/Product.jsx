import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const response = await data.json();
        setProduct(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, []);
  return (
    <div className="mt-4">
      <h3 className="text-xl border-2 border-black text-center font-semibold mb-3 p-4 rounded-lg">Products</h3>

      <div className="grid grid-cols-4 gap-4 ">
        {product.map((p, index) => {
          return <ProductCard key={index} product={p} />;
        })}
      </div>
    </div>
  );
};

export default Products;
