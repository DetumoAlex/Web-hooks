import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.cartItem);
  console.log(cartItems);

  return (
    <div className="relative text-white">
      <div className="w-1/4 absolute right-0 top-0 bg-black p-4 w-[30%] ">
        <h2 className="mb-3 text-xl font-bold">Cart Items:</h2>
        <div className="flex justify-between  ">
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.title} </li>
            ))}

            {/* <li>{item.price}</li> */}
          </ul>
          <ul className="font-bold">
            {cartItems.map((item, index) => (
              <li key={index}> ${item.price}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center p-4 ">
          <Link
            to="checkout"
            className=" border p-2 text-xl font-semibold bg-white text-black rounded"
          >
            checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
