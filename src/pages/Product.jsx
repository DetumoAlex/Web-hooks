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
    const result = product.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
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

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query); 
    searchProduct(query); 
  };

  return (
    <div className="mt-4 p-4">
      <div className="flex flex-col md:flex-row justify-between text-xl text-center font-semibold mb-3 p-2 border-2 border-black rounded-lg">
        <h3 className="mb-4 md:mb-0 ">Products</h3>

        <div className="flex items-center shadow text-sm p-2 rounded-lg w-full md:w-auto">
          <input
            type="text"
            className=" bg-white rounded-lg focus:outline-none w-full md:w-64 "
            placeholder="Search Product"
            value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            onChange={handleSearchChange}
          />
          {/* <p
            className="cursor-pointer"
            onClick={searchProduct}
          >
            <CiSearch />
          </p> */}
        </div>
        <div className="mt-4 md:mt-0">
          <select
            name="Filter"
            id=""
            onChange={(e) => {
              filter(Number(e.target.value));
            }}
            className="w-auto md:w-auto focus:outline-none p-2 border rounded-lg"
          >
            <option value="">All</option>
            <option value="150">greater than 150</option>
            <option value="200">greater than 200</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" >
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
