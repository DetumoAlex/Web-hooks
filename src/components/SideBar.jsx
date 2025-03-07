import { Link, useNavigate } from "react-router-dom";
import { IoSettingsOutline, IoHomeOutline } from "react-icons/io5";
import { CiMoneyBill } from "react-icons/ci";
import { MdProductionQuantityLimits } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const SideBar = () => {

  const dispatch = useDispatch;
  const signOut = () => {
    dispatch(localStorage.removeItem("token"));
    toast("Signed Out");
  };

  return (
    <>
      <div className="text-white w-1/5 rounded-br-lg bg-black flex flex-col justify-between p-4 mt-10">
        <div></div>
        <ul className=" flex flex-col gap-y-2 text-xl font-semibold ">
          <Link to="/overview" className="flex items-center">
            <IoHomeOutline className="mr-1" />
            Overview
          </Link>
          <Link to="/product" className="flex items-center">
            <MdProductionQuantityLimits className="mr-1" /> Product
          </Link>
          <Link to="billing" className="flex items-center">
            <CiMoneyBill className="mr-1" /> Billing
          </Link>
          <Link to="transaction" className="flex items-center">
            <CiMoneyBill className="mr-1" /> Transactions
          </Link>
        </ul>

        <div className="mt-auto py-10 text-white text-lg cursor-pointer">
          <Link to="/settings" className="flex items-center gap-1">
            <IoSettingsOutline /> Settings
          </Link>
          <Link to="/sign-in" onClick={signOut} className="cursor-pointer">
            {" "}
            Sign-Out
          </Link>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default SideBar;
