import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { data, Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { registerUser } from "../redux/slices/authSlice";
const baseURL = import.meta.env.VITE_BASE_URL
const apiClient =axios.create({baseURL})

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const navigate = useNavigate();
const dispatch =useDispatch()
  const signupData = {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    await dispatch(registerUser(signupData))
    console.log(dispatch(registerUser(signupData)));
    try {
      Swal.fire({
        title:`user`,
        text:`created`,
        icon:"success",
      })
      navigate("/sign-in")
    } catch (error) {
      Swal.fire({
        title:`user`,
        text:`failed`,
        icon:"error",
      })
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className=" w-full max-w-md shadow-xl border bg-white rounded-lg">
          <form action="" className="">
            <div className="p-2 border-b-2">
              <h1 className="flex items-center justify-center text-3xl font-bold ">
                Create a new account
              </h1>
              <p className="flex items-center justify-center text-gray-600">
                Its quick and easy.
              </p>
            </div>

            <div className="p-3">
              <div className="flex w-1/2 mb-4 items-center  ">
                <div className="w-1/1  p-2 border rounded-md">
                  <input
                    type="text"
                    placeholder="First name"
                    className="focus:outline-0"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="w-1/1 p-2 border rounded-md ">
                  <input
                    type="text"
                    placeholder="Lastname"
                    className="focus:outline-0 "
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div>
                  <input
                    type="text"
                    placeholder="email address"
                    onChange={(e) => setEmail(e.target.value)}
                    className="border w-full mb-2 p-2 rounded-md"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Phonenumber"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full mb-2 p-2 border rounded-md focus:outline-0"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="New password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-2 p-2 border rounded-md"
                  />
                </div>

                <div className="text-xs text-gray-500">
                  <p className="mb-2">
                    People who use our service may have uploaded your contact
                    information to Facebook.{" "}
                    <span className=" hover:underline cursor-pointer">
                      Learn more.
                    </span>{" "}
                  </p>
                  <p className="mb-3">
                    By clicking Sign Up, you agree to our{" "}
                    <span className=" hover:underline cursor-pointer">
                      Terms,
                    </span>{" "}
                    <span className=" hover:underline cursor-pointer">
                      {" "}
                      Privacy Policy
                    </span>{" "}
                    and{" "}
                    <span className=" hover:underline cursor-pointer">
                      Cookies Policy.
                    </span>{" "}
                    You may receive SMS notifications from us and can opt out at
                    any time.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center p-2">
                <button
                  onClick={handleSignUp}
                  className="bg-gray-600 font-bold text-white w-1/2 p-1 text-lg rounded-md"
                >
                  Sign Up
                </button>

                <Link to="/sign-in" className="mt-4 text-lg ">
                  Already have an account?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
