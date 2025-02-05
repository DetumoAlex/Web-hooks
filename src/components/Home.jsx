import { SiWebmoney } from "react-icons/si";


const Home = () => {
  return (
    <>
      <main className="m-10 items-center justify-center ">
        <div className="flex justify-between px-20 mb-10">
          <div className="bg-green-600 w-[30%] h-12 rounded text-center text-white p-2 font-semibold text-xl">Success</div>
          <div className="bg-yellow-400 w-[30%] rounded text-center text-white p-2 font-semibold text-xl">Pending</div>
          <div className="bg-red-600 w-[30%] rounded text-center text-white p-2 font-semibold text-xl">Failed</div>
        </div>

        <div className=" mb-10 shadow-lg p-4">
            <h1 className="mb-2 font-bold">Pending</h1>
            <div className=" w-50 p-4 flex items-center font-semibold  bg-slate-100 rounded-xl">
            <SiWebmoney className="mr-2 w-10 text-3xl"/>
               <div>
               <h3 className="mb-1 text-gray-500">Amount Sent</h3>
               <p className="text-3xl font-bold">1,000</p>
               </div>
            </div>

            <div>

            </div>
        </div>

        {/* <div className="border">
            <h1 className="mb-4 font-semibold">Transactions</h1>

          <div className="">
          <div className="flex justify-between border mb-4 ">
           <div className="flex">
                <img src="/public/IMG_20230626_204835_530.jpg" alt="" className="w-9 h-9 rounded-full"/>
                <div>Lorem, ipsum dolor.</div>
            </div>
            <div className="">
                <p>$400</p>
                <p>Aug 6 23</p>
            </div>

            
           </div>

           <div className="flex justify-between border mb-4">
           <div className="flex">
                <img src="/public/IMG_20230626_204835_530.jpg" alt="" className="w-9 h-9 rounded-full"/>
                <div>Lorem, ipsum dolor.</div>
            </div>
            <div className="">
                <p>$400</p>
                <p>Aug 6 23</p>
            </div>

            
           </div>

           <div className="flex justify-between border mb-4">
           <div className="flex">
                <img src="/public/IMG_20230626_204835_530.jpg" alt="" className="w-9 h-9 rounded-full"/>
                <div>Lorem, ipsum dolor.</div>
            </div>
            <div className="">
                <p>$400</p>
                <p>Aug 6 23</p>
            </div>

            
           </div>

           <div className="flex justify-between border mb-4">
           <div className="flex">
                <img src="/public/IMG_20230626_204835_530.jpg" alt="" className="w-9 h-9 rounded-full"/>
                <div>Lorem, ipsum dolor.</div>
            </div>
            <div className="">
                <p>$400</p>
                <p>Aug 6 23</p>
            </div>

            
           </div>

           <div className="flex justify-between border mb-4">
           <div className="flex">
                <img src="/public/IMG_20230626_204835_530.jpg" alt="" className="w-9 h-9 rounded-full"/>
                <div>Lorem, ipsum dolor.</div>
            </div>
            <div className="">
                <p>$400</p>
                <p>Aug 6 23</p>
            </div>

            
           </div>
          </div>
        </div> */}

        {/* <div className="">
            <h1>Transaction History</h1>
          <table className="table-auto border ">
            <thead>
              <tr>
                <th>T/N</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td>Lorem, ipsum dolor.</td>
                <td>Failed</td>
                <td>Lorem, ipsum.</td>
              </tr>
              <tr>
                <td>Lorem, ipsum dolor.</td>
                <td>Success</td>
                <td>Lorem, ipsum.</td>
              </tr>
              <tr>
                <td>Lorem, ipsum dolor.</td>
                <td>Pending</td>
                <td>Lorem, ipsum.</td>
              </tr>
            </tbody>
          </table>
        </div> */}

<div className="mt-6">
  <h1 className="text-xl font-bold mb-2">Transaction History</h1>
  <table className="table-auto w-full border-collapse  ">
    <thead className="bg-gray-200">
      <tr>
        <th className="border border-gray-300 px-6 py-2 text-center">T/N</th>
        <th className="border border-gray-300 px-6 py-2 text-center">Status</th>
        <th className="border border-gray-300 px-6 py-2 text-center">Date</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border border-gray-300">
        <td className="border border-gray-300 px-6 py-2 text-center">Lorem, ipsum dolor.</td>
        <td className="border border-gray-300 px-6 py-2 text-center text-red-500">Failed</td>
        <td className="border border-gray-300 px-6 py-2 text-center">Lorem, ipsum.</td>
      </tr>
      <tr className="border border-gray-300">
        <td className="border border-gray-300 px-6 py-2 text-center">Lorem, ipsum dolor.</td>
        <td className="border border-gray-300 px-6 py-2 text-center text-green-500">Success</td>
        <td className="border border-gray-300 px-6 py-2 text-center">Lorem, ipsum.</td>
      </tr>
      <tr className="border border-gray-300">
        <td className="border border-gray-300 px-6 py-2 text-center">Lorem, ipsum dolor.</td>
        <td className="border border-gray-300 px-6 py-2 text-center text-yellow-500">Pending</td>
        <td className="border border-gray-300 px-6 py-2 text-center">Lorem, ipsum.</td>
      </tr>
    </tbody>
  </table>
</div>

      </main>
    </>
  );
};

export default Home;
