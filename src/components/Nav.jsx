// import { Link } from "react-router-dom";
// import { FaRegUser } from "react-icons/fa";
// import { TfiHeadphoneAlt } from "react-icons/tfi";
// import { HiOutlineShoppingCart } from "react-icons/hi2";
// import { useSelector } from "react-redux";
// import { useState } from "react";
// import CartItems from '../components/CartItems'

// const Nav = () => {
//   const cart = useSelector((state) => state.cart.cartCount);
//   const [cartItem, setCartItem] = useState(false);


//   const closeDropdown = () => {
//     setCartItem(false)
//   }

//   return (
//     <div className="">
//       <nav className="text-white p-2 px-10 bg-black fixed left-0 right-0 ">
//         <div className="flex justify-between text-2xl font-bold  b">
//           <Link to="/" className="flex items-center gap-1">
//             <TfiHeadphoneAlt /> <h1>CRT</h1>
//           </Link>

//           {/* <marquee behavior="" direction="">Hello welcome to CRT</marquee> */}
//           <div className="overflow-hidden w-1/3">
//             <p className="animate-marquee whitespace-nowrap text-lg ">
//               Hello, welcome to CRT. Enjoy your stay!
//             </p>
//           </div>

//           <div>
//             <ul className="flex items-center gap-2">
//               <Link to="/user" className="flex gap-2 items-center">
//                 <FaRegUser /> User
//               </Link>
              
//               <HiOutlineShoppingCart
//                 onClick={() => setCartItem((previous) => !previous)}
//               />
//               <span className="text-sm">{cart}</span>
//               {/* </Link> */}
//             </ul>
//           </div>
//         </div>
//       </nav>
//       {cartItem && <CartItems closeDropdown={closeDropdown}/>}
//     </div>
//   );
// };

// export default Nav;

import { Link } from "react-router-dom";
import { FaRegUser, FaBars } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import CartItems from "./CartItems"; 
import { updateFirstName } from "../redux/slices/userSlice";// Assuming you have a CartItems component

const Nav = () => {
  const cart = useSelector((state) => state.cart.cartCount);
  const user = useSelector((state)=> state.user)
  const [cartItem, setCartItem] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const closeDropdown = () => {
    setCartItem(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      <nav className="text-white p-2 px-4 md:px-10 bg-black fixed left-0 right-0 z-50">
        <div className="flex justify-between items-center text-2xl font-bold">
          {/* Logo and Menu Toggle (Mobile) */}
          <div className="flex items-center gap-4">
            <button onClick={toggleMenu} className="md:hidden">
              <FaBars size={24} />
            </button>
            <Link to="/" className="flex items-center gap-1">
              <TfiHeadphoneAlt /> <h1>CRT</h1>
            </Link>
          </div>

          {/* Marquee Text (Hidden on Mobile) */}
          <div className="hidden md:block overflow-hidden w-1/3">
            <p className="animate-marquee whitespace-nowrap text-lg">
              Hello, welcome to CRT. Enjoy your stay!
            </p>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/user" className="flex gap-2 items-center">
              <FaRegUser /> <span className="text-lg">{user}</span>
            </Link>
            {/* <Link to='/SignIn'>signin</Link> */}
            
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setCartItem((previous) => !previous)}
            >
              <HiOutlineShoppingCart />
              <span className="text-sm">{cart}</span>
            </div>
          </div>

          {/* Cart Icon (Mobile) */}
          <div
            className="md:hidden flex items-center gap-2 cursor-pointer"
            onClick={() => setCartItem((previous) => !previous)}
          >
            <HiOutlineShoppingCart />
            <span className="text-sm">{cart}</span>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col gap-2">
              <Link
                to="/user"
                className="flex gap-2 items-center p-2 hover:bg-gray-700 rounded"
                onClick={toggleMenu}
              >
                <FaRegUser /> User
              </Link>
            </ul>
          </div>
        )}
      </nav>

      {/* Cart Dropdown */}
      {cartItem && <CartItems closeDropdown={closeDropdown} />}
    </div>
  );
};

export default Nav;