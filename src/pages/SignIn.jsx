import axios from "axios";
import {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const navigate = useNavigate()


  const signInData={
    email:email,
    password:password
  }


    const handleLogin = async (e) => {
      e.preventDefault()
        const res = await axios.post("http://localhost:5000/api/sign-in", signInData);
        // const data = res.data;
        if(res.data.status === true){
                Swal.fire({
                    title: `${res.data.data.email}`,
                    text: `${res.data.message}`,
                    icon: "success"
                  });
                  navigate('/product')
                }console.log(error.message)
    };

  return (
    <div className="flex items-center justify-center p-5 my-20 ">
      <div className="px-6">
        <h1 className="font-bold text-5xl mb-3 text-black">Crt</h1>
        <p className="w-[500px] font-semibold text-3xl">
          Crt helps you to connect and share with the people in your life.
        </p>
      </div>

      <div className=" ">
        <form
          action=""
          className="w-full max-w-sm p-8 shadow-lg bg-white rounded-lg"
        >
          <div className="mb-4 ">
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full p-3 border rounded-md focus:border-gray-400 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password "
              className="w-full p-3 border rounded-md focus:border-gray-400 focus:outline-none font-semibold"
            />
          </div>

          <div>
            <button
              onClick={handleLogin}
              className="w-full  bg-black py-3 rounded-lg mb-3 text-white font-semibold text-2xl"
            >
              Log in
            </button>

            <Link
              to="/signup"
              className="flex items-center justify-center mb-3 text-black"
            >
              Don't have an Account? Register
            </Link>
            <hr className="mb-4" />
          </div>
          <div className=" flex items-center justify-center">
            <Link to="/signup">
              <button className="text-lg font-medium bg-gray-500 p-3 text-white w-1/1 border rounded-lg">
                Create a new account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
