import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Back from "./Back";

const MainLayout = () => {
  return (
    <>
      <Nav />
      <main className="w-[100%] items-center flex">
        <SideBar />
        <div className=" w-full max-h-auto p-4 mx-10 ">
          <Back />
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
