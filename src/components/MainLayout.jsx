import Nav from "./Nav";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import Back from "./Back";




const MainLayout = () => {
  const location = useLocation();


  return (
    <>
      <Nav />
      <main className="flex flex-grow ">
        <SideBar />
        <div className="flex-grow p-4 mx-10 ">
          {location.pathname !== "/" && <Back />}
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
