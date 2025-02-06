import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleProduct();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="flex shadow-lg p-4 m-5 gap-10 text-lg">
      <img src={product.image} alt={product.title} width="200" />
      <div className="m-10 leading-8">
        <h2>
          <strong>Title:</strong>
          {product.title}
        </h2>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>

        <button className="text-2xl font-semibold bg-black rounded-lg p-2 w-1/2 mt-10 text-white">
          BUY
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
