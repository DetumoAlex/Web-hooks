import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const Register = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] =useState('')
  const[firstName, setFirstName]= useState('')
  const [lastName, setLastName]= useState("")
  const [phoneNumber, setPhoneNumber]= useState()
  const navigate = useNavigate()


  const signupData = {
    email:email,
    password:password,
    firstName:firstName,
    lastName:lastName,
    phoneNumber:phoneNumber

  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    const res = await axios.post("http://localhost:5000/api/sign-up", signupData)
    console.log(res);
    if(res.data.status === true){
        Swal.fire({
            title: `${res.data.data.lastName}`,
            text: `${res.data.message}`,
            icon: "success"
          });
        navigate("/signin")
    }console.log(error.message)
  }

//   const numbers = Array.from({ length: 31 }, (_, i) => i + 1);
//   const months = [
//     "jan",
//     "feb",
//     "mar",
//     "apr",
//     "may",
//     "june",
//     "july",
//     "aug",
//     "sept",
//     "oct",
//     "nov",
//     "dec",
//   ];

//   const years = Array.from(
//     { length: 30 },
//     (_, i) => new Date().getFullYear() - i
//   );

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
              <div className="flex w-1/2 mb-4 items-center ">
                <div className="w-1/1  p-2 border">
                  <input type="text" placeholder="First name" onChange={(e) => setFirstName(e.target.value)}/>
                </div>

                <div className="w-1/1 p-2 border">
                  <input type="text" placeholder="Lastname" onChange={(e) => setLastName(e.target.value)}/>
                </div>
              </div>

              {/* <div className="border">
                <p>Date of birth</p>
                <div className=" flex  mb-4 p-3">
                  <div className="border">
                    <select
                      name="numbers"
                      id="numbers"
                      className=""
                      value={selectedNumber}
                      onChange={(e) => setSelectedNumber(e.target.value)}
                    >
                      {numbers.map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="border">
                    <select
                      name="month"
                      id="months"
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                    >
                      {months.map((month, index) => (
                        <option key={index} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="border">
                    <select
                      name="year"
                      id="years"
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                    >
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div> */}

              <div >
                {/* <p>Gender</p> */}

                {/* <div className="flex mb-4 p-3 border">
                  <div className="border w-1/3">
                    <label htmlFor="">Female</label>
                    <input type="radio" placeholder="Female" className="" />
                  </div>

                  <div className="w-1/3 border">
                    <label htmlFor="">Male</label>
                    <input type="radio" placeholder="Female" />
                  </div>

                  <div className="w-1/3 border">
                    <label htmlFor="">Custom</label>
                    <input type="radio" placeholder="Female" />
                  </div>
                </div> */}

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
                    className="w-full mb-2 p-2 border rounded-md"
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
                    <span className="text-blue-900 hover:underline cursor-pointer">
                      Learn more.
                    </span>{" "}
                  </p>
                  <p className="mb-3">
                    By clicking Sign Up, you agree to our{" "}
                    <span className="text-blue-900 hover:underline cursor-pointer">
                      Terms,
                    </span>{" "}
                    <span className="text-blue-900 hover:underline cursor-pointer">
                      {" "}
                      Privacy Policy
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-900 hover:underline cursor-pointer">
                      Cookies Policy.
                    </span>{" "}
                    You may receive SMS notifications from us and can opt out at
                    any time.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center p-2">
                <button onClick={handleSignUp} className="bg-gray-600 font-bold text-white w-1/2 p-1 text-lg rounded-md">
                  Sign Up
                </button>

                <Link to="/signin" className="mt-4 text-lg text-blue-600">
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
