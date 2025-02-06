import { Link } from "react-router-dom";
import { IoSettingsOutline, IoHomeOutline } from "react-icons/io5";
import { CiMoneyBill } from "react-icons/ci";
import { MdProductionQuantityLimits } from "react-icons/md";

const SideBar = () => {
  return (
    <>
      <div className="text-white w-1/5 bg-gradient-to-br from-black to-slate-300 flex flex-col justify-between p-4">
        <div></div>
        <ul className=" flex flex-col gap-y-2 text-xl font-semibold ">
          <Link to="/" className="flex items-center">
            <IoHomeOutline className='mr-1' />
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

        <div className="mt-auto py-10 text-white text-xl">
          <Link to="/settings" className="flex items-center gap-1">
            <IoSettingsOutline /> Settings
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
