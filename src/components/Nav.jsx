import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { useState } from "react";
import CartItems from "./cartItems";

const Nav = () => {
  const cart = useSelector((state) => state.cart.cartCount);
  const [cartItem, setCartItem] = useState(false);


  const closeDropdown = () => {
    setCartItem(false)
  }

  return (
    <div className="">
      <nav className="text-white p-2 px-10 bg-black fixed left-0 right-0 ">
        <div className="flex justify-between text-2xl font-bold  b">
          <Link to="/" className="flex items-center gap-1">
            <TfiHeadphoneAlt /> <h1>CRT</h1>
          </Link>

          {/* <marquee behavior="" direction="">Hello welcome to CRT</marquee> */}
          <div className="overflow-hidden w-1/3">
            <p className="animate-marquee whitespace-nowrap text-lg ">
              Hello, welcome to CRT. Enjoy your stay!
            </p>
          </div>

          <div>
            <ul className="flex items-center gap-2">
              <Link to="/user" className="flex gap-2 items-center">
                <FaRegUser /> User
              </Link>
              {/* <Link
                to="/cartItems"
                className="flex"
                onClick={() => setCartItem(true)}
              > */}
              <HiOutlineShoppingCart
                onClick={() => setCartItem((previous) => !previous)}
              />
              <span className="text-sm">{cart}</span>
              {/* </Link> */}
            </ul>
          </div>
        </div>
      </nav>
      {cartItem && <CartItems closeDropdown={closeDropdown} />}
    </div>
  );
};

export default Nav;
