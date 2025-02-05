
import { Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Nav = () => {
  return (
    <div>
      <nav className='text-white  p-2 px-10 shadow bg-gradient-to-br from-blue-800 to-slate-900 font-mono'>
        <div className='flex justify-between text-2xl font-bold '>
            <Link to='/' className='flex items-center gap-1'><TfiHeadphoneAlt /> <h1>CRT</h1></Link>
            {/* <marquee behavior="" direction="">Hello welcome to CRT</marquee> */}
            <div className="overflow-hidden w-1/3">
            <p className="animate-marquee whitespace-nowrap text-lg text-gray-300">
              Hello, welcome to CRT. Enjoy your stay!
            </p>
          </div>
            

            <div>
                <ul >
                <Link to='/user' className='flex gap-2 items-center'><FaRegUser/> User</Link>
                
                </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
