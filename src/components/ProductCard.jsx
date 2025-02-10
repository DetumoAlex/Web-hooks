import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-sm p-4 h-[100%] shadow-lg rounded-2xl  ">
        <img
          src={product.image}
          alt={product.title}
          className=" mb-4 w-full h-50 object-contain"
        />
        <p className="font-semibold text-xl mb-3">
          <strong>Price:</strong> ${product.price}
        </p>
        <h2 className=" p- mb-3">{product.category}</h2>
        <div className="">
          <Link
            to={`${product.id}`}
            className=" text-white rounded-xl px-4 py-2 bg-black flex items-center justify-center">
            <button> View more detail</button>
          </Link>
          <button
            onClick={() => dispatch(addToCart(product))}
            className=" text-white rounded-xl px-4 py-2 bg-black mt-2">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
