import { useNavigate } from "react-router-dom"
import { IoIosArrowDropleft } from "react-icons/io";

const Back = () => {
     const navigate = useNavigate()

  return (
    <div className="mt-10">
      <button onClick={()=> {navigate(-1)}} 
      className="cursor-pointer text-2xl p-1 w-18 rounded-lg "><IoIosArrowDropleft /></button>
    </div>
  )
}

export default Back
