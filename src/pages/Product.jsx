import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { CiSearch } from "react-icons/ci";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filter = (price) => {
    const result = filterProduct.filter((product) => product.price > price);
    setProduct(result);
    return result;
  };

  const searchProduct = () => {
    if (!searchQuery.trim()) {
      setProduct(filterProduct);
      return;
    }
    const result = product.find((p) => p.title.includes(searchQuery));
    setProduct(result);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const response = await data.json();
        setProduct(response);
        setFilterProduct(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, []);
  return (
    <div className="mt-4">
      <div className="flex justify-between text-xl text-center font-semibold mb-3 p-2 border-2 border-black rounded-lg">
        <h3 className=" ">Products</h3>

        <div className="flex items-center shadow text-sm p-2 rounded-lg">
          <input
            type="text"
            className=" bg-white rounded-lg focus:outline-none"
            placeholder="Search Product"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <p className="cursor-pointer" value="id" onClick={searchProduct}>
            <CiSearch />
          </p>
        </div>
        <div>
          <select
            name="Filter"
            id=""
            onChange={(e) => {
              filter(Number(e.target.value));
            }}
            className="w-auto focus:outline-none"
          >
            <option value="">All</option>
            <option value="150">greater than 150</option>
            <option value="200">greater than 200</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 ">
        {/* {product.map((p, index) => {
          return <ProductCard key={index} product={p} />;
        })} */}
        {product.length > 0 ? (
          product.map((p, index) => <ProductCard key={index} product={p} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
