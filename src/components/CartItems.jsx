// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const CartItems = ({ closeDropdown }) => {
//   const cartItems = useSelector((state) => state.cart.cartItem);
//   console.log(cartItems);

//   return (
//     <div className="relative text-black shadow-lg ">
//       <div className="w-1/4  absolute right-0 top-0 bg-white p-4 mt-14 ">
//         <h2 className="mb-3 text-xl font-bold">Cart Items:</h2>
//         <div className="flex justify-between ">
//           <ul className="">
//             {cartItems.map((item, index) => (
//               <li key={index} className=" ">{item.category} </li>
//             ))}

//             {/* <li>{item.price}</li> */}
//           </ul>
//           <ul className="font-bold">
//             {cartItems.map((item, index) => (
//               <li key={index}> ${item.price}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="flex justify-center p-4 ">
//           <Link
//             to="checkout"
//             className=" border p-2 text-xl font-semibold bg-white text-black rounded"
//             onClick={closeDropdown}
//           >
//             checkout
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartItems = ({ closeDropdown }) => {
  const cartItems = useSelector((state) => state.cart.cartItem);
  console.log(cartItems);

  return (
    <div className="relative text-white shadow-lg ">
      <div className="w-1/4 absolute right-0 top-0 bg-black p-4 mt-12 z-2  rounded-bl-[30%]">
        <h2 className="mb-3 text-xl font-bold">Cart Items:</h2>
        <div className={`text-xl flex flex-col p-4 ${cartItems.length > 5 ? "overflow-y-scroll h-96" : ""}`}
        >
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
              <p className="text-lg">{item.category}</p>
              <p className="font-bold text-lg">${item.price}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center p-4">
          <Link
            to="checkout"
            className="border p-2 text-xl font-semibold bg-white text-black rounded"
            onClick={closeDropdown}
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
