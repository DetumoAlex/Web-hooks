import { Link } from "react-router-dom"
import { IoSettingsOutline } from "react-icons/io5";
import { CiMoneyBill } from "react-icons/ci";
import { MdProductionQuantityLimits } from "react-icons/md";

const SideBar = () => {
  return (
    <>
      <nav className="text-white relative bg-[url('/public/pexels-artempodrez-5025512.jpg')] bg-cover bg-center bg-no-repeat h-screen w-1/4 flex flex-col justify-between p-2">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>
        <ul className="relative  flex flex-col gap-y-2 text-2xl font-semibold ">
            <Link to='/product' className="flex items-center"><MdProductionQuantityLimits className="mr-1"/> Product</Link>
            <Link to='billing' className="flex items-center"><CiMoneyBill className="mr-1"/> Billing</Link>
            
        </ul>

        <div className="mt-auto py-10 relative text-white text-xl">
            <Link to='/settings' className="flex items-center gap-1"><IoSettingsOutline/> Settings</Link>
        </div>
      </nav>
    </>
  )
}

export default SideBar
