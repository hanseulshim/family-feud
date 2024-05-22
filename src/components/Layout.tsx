import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 from-30% via-purple-700 via-75% to-blue-800 to-90% flex items-center justify-center">
      <div className="bg-opacity-0 w-full h-screen sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/2 mx-auto flex flex-col items-center p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
