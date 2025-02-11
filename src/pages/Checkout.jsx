// import { useDispatch, useSelector } from "react-redux";
// import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
// import { ToastContainer, toast } from "react-toastify";
// import { remove } from "../redux/slices/cartSlice";
// import { MdCancel } from "react-icons/md";

// const Checkout = () => {
//   const cartItems = useSelector((state) => state.cart.cartItem);
//   const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);
//   const dispatch = useDispatch();

//   const FLUTTER_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

//   const config = {
//     public_key: FLUTTER_PUBLIC_KEY,
//     tx_ref: Date.now(),
//     amount: totalAmount,
//     currency: "NGN",
//     payment_options: "card,mobilemoney,ussd",
//     customer: {
//       email: "user@gmail.com",
//       phone_number: "070**",
//       name: "john doe",
//     },
//     customizations: {
//       title: "My store",
//       description: "Payment for items in cart",
//       logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
//     },
//   };

//   const fwConfig = {
//     ...config,
//     text: "Proceed",
//     callback: (response) => {
//       console.log(response);
//       closePaymentModal();
//     },
//     onClose: () => {},
//   };

//   const removeFromCart = (item) => {
//     dispatch(remove(item));
//     toast("Item removed");
//   };

//   return (
//     <div className="relative ">
//       <div className=" text-xl p-4 ">
//         <h2 className="mb-3 text-xl font-bold">Checkout:</h2>
//         <div className="flex  justify-between border ">
//           {/* <img src="" alt="" /> */}
//           <div>
//           <ul className="font-semibold border">
//             {cartItems.map((item, index) => (
//               <li key={index} className="mb-3 flex items-center border ">
//                 <img src={item.image} alt="" className="w-20" />
//                 {item.title}

//               </li>

//             ))}

//             {/* <li>{item.price}</li> */}

//           </ul>
//           </div>

//           <div>
//           <ul className="border ">

//           {cartItems.map((item, index) => (
//             <>
//             <div className="flex border">
//               <li key={index} className="mb-3">
//                 {" "}
//                 ${item.price}
//               </li>
//               <div className="">
//               <button onClick={() => removeFromCart(item)}><MdCancel /></button>
//               </div>
//               </div>
//             </>
//           ))}

//         </ul>
//           </div>

//         </div>
//         <p className="font-bold absolute right-0 mt-4">Total: ${totalAmount}</p>
//       </div>

//       {/* <div className='rounded text-center text-2xl mt-10 bg-black text-white p-2 w-1/4 '>
//         <button>Pay</button>
//     </div> */}
//       <FlutterWaveButton
//         className="text-2xl font-semibold bg-black rounded-lg p-2 w-1/5 mt-10 text-white cursor-pointer"
//         {...fwConfig}

//       />
//       <ToastContainer />
//     </div>
//   );
// };

// export default Checkout;
import { useDispatch, useSelector } from "react-redux";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { ToastContainer, toast } from "react-toastify";
import { remove } from "../redux/slices/cartSlice";
import { MdCancel } from "react-icons/md";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItem);
  // const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);
  const totalAmount = Math.ceil(cartItems.reduce((acc, item) => acc + item.price, 0));

  const dispatch = useDispatch();
  const FLUTTER_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const config = {
    public_key: FLUTTER_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: totalAmount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070**",
      name: "john doe",
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Proceed",
    callback: (response) => {
      console.log(response);
      closePaymentModal();
    },
    onClose: () => {},
  };

  const removeFromCart = (item) => {
    dispatch(remove(item));
    toast("Item removed");
  };

  return (
    <div className="relative overflow-y-scroll h-96 ">
      <div className="text-xl p-4  ">
        <h2 className="mb-3 text-xl font-bold ">Checkout:</h2>
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between rounded-lg items-center py-2 border-b border-gray-200 hover hover:bg-black hover:text-white"
          >
            <div className="flex items-center ">
              <img src={item.image} alt="" className="w-20 " />
              <p className="ml-4">{item.title}</p>
            </div>
            <div className="flex items-center">
              <p className="font-bold">${item.price}</p>
              <button
                onClick={() => removeFromCart(item)}
                className="ml-4 text-red-500"
              >
                <MdCancel />
              </button>
            </div>
          </div>
        ))}
        <p className="font-bold absolute right-0 mt-4">Total: ${totalAmount}</p>
      </div>
      <FlutterWaveButton
        className="text-2xl font-semibold bg-black rounded-lg p-2 w-1/5 mt-10 text-white cursor-pointer"
        {...fwConfig}
      />
      <ToastContainer />
    </div>
  );
};

export default Checkout;
