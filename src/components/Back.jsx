import { useNavigate } from "react-router-dom"


const Back = () => {
     const navigate = useNavigate()

  return (
    <div >
      <button onClick={()=> {navigate(-1)}} 
      className="cursor-pointer text-2xl font-semibold bg-blue-700 p-1 w-18 text-white ml-10 rounded-lg">Prev</button>
    </div>
  )
}

export default Back
