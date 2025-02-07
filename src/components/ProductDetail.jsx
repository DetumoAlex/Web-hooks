import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const FLUTTER_PUBLIC_KEY =import.meta.env.VITE_PUBLIC_KEY

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

  

  

  const config = {
    public_key: FLUTTER_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount:product.price,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phone_number: '070**',
      name: 'john doe',
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Buy now',
    callback: (response) => {
       console.log(response);
      closePaymentModal() 
    },
    onClose:()=>{},
};

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
        <FlutterWaveButton className="text-2xl font-semibold bg-black rounded-lg p-2 w-1/2 mt-10 text-white cursor-pointer"
        {...fwConfig}
        />

        {/* <button >
          BUY
        </button> */}
      </div>
    </div>
  );
};

export default ProductDetail;
