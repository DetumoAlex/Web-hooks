import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="text-sm p-4 h-[100%] shadow-lg rounded-2xl  ">
        <img
          src={product.image}
          alt={product.title}
          className=" mb-4 w-full h-50 object-contain"
        />
        <p className="font-semibold text-xl">
          <strong>Price:</strong> ${product.price}
        </p>
        <h2 className=" p-2 mb-3">{product.title}</h2>
        <Link
          to={`${product.id}`}
          className=" text-white rounded-xl px-4 py-2 bg-black flex items-center justify-center"
        >
          <button> View more detail</button>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
