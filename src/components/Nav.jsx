import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const Nav = () => {
  return (
    <div>
      <nav className="text-white p-2 px-10 bg-gradient-to-br from-black to-slate-300 ">
        <div className="flex justify-between text-2xl font-bold ">
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
              <Link to="/">
                <HiOutlineShoppingCart />
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
