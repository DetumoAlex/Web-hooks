import React from "react";
import { Link } from "react-router-dom";
import { GrBusinessService } from "react-icons/gr";
import { RiServiceLine } from "react-icons/ri";
import { RiCustomerServiceLine } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <div className="">
        <div className="flex p-6 justify-center items-center bg-gradient-to-br from-black to-slate-300 shadow-lg rounded-lg">
          <input
            type="text"
            className=" w-1/2 p-2 px-10 bg-white rounded-lg focus:outline-none"
            placeholder="Search Product"
          />
          {/* <Link to="/product">Products</Link> */}
        </div>

       

        <main className="gap-4 mt-10 flex text-white ">
        
          <div className="">
            
            <div className=" mb-4 p-4 flex items-center gap-4 bg-black rounded-lg">
              <p className="text-4xl">
                <GrBusinessService />
              </p>
              <div>
                <p className="font-bold text-2xl">Lorem.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  excepturi et aliquid quidem culpa sed totam laudantium
                  architecto est nobis.
                </p>
              </div>
            </div>

            <div className=" p-4  flex items-center gap-4 bg-black rounded-lg">
              <p className="text-4xl">
                <RiServiceLine />
              </p>
              <div>
                <p className="font-bold text-2xl">Lorem.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  excepturi et aliquid quidem culpa sed totam laudantium
                  architecto est nobis.
                </p>
              </div>
            </div>
          </div>

          <div className=" p-4 bg-black rounded-lg">
            <div>
              <p className="font-bold text-2xl">Lorem.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                excepturi et aliquid quidem culpa sed totam laudantium
                architecto est nobis.
              </p>
            </div>
            <p className="text-[100px] flex text-center justify-center">
              
              <RiCustomerServiceLine />
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
