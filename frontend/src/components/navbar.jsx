import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user } = useSelector((state) => state.userReducer);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="sm:flex gap-5 relative text-xl justify-center py-4 px-2 border-b border-gray-300">
      <div className="font-mono text-2xl">BINOD-B</div>

      {/* Hamburger */}
      <div
        className="hamburger flex justify-center items-center absolute top-2 right-3.5 bg-gray-600 size-10 p-6 text-white rounded-full sm:hidden cursor-pointer"
        onClick={toggleSidebar}
      >
        <i className="ri-menu-line text-2xl"></i>
      </div>

      {/* Desktop nav */}
      <div className="hidden sm:flex gap-5">
        <NavLink className={(e) => (e.isActive ? "border-b" : "")} to="/">
          Home
        </NavLink>
        {user && (
          <>
            <NavLink
              className={(e) => (e.isActive ? "border-b" : "")}
              to="/products"
            >
              Products
            </NavLink>
            <NavLink
              className={(e) => (e.isActive ? "border-b" : "")}
              to="/logout"
            >
              Logout
            </NavLink>
          </>
        )}
        {!user && (
          <NavLink
            className={(e) => (e.isActive ? "border-b" : "")}
            to="/register"
          >
            Register
          </NavLink>
        )}
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 text-right pr-5 h-full w-64 bg-gray-800 text-white transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden z-50 p-5`}
      >
        <button type="button" className="mb-5 text-2xl" onClick={toggleSidebar}>
          <i className="ri-close-large-line text-3xl"></i>
        </button>
        <NavLink className="text-2xl block py-2" to="/" onClick={toggleSidebar}>
          Home
        </NavLink>
        {user && (
          <>
            <NavLink
              className=" block py-2"
              to="/products"
              onClick={toggleSidebar}
            >
              Products
            </NavLink>
            <NavLink
              className=" block py-2"
              to="/logout"
              onClick={toggleSidebar}
            >
              Logout
            </NavLink>
          </>
        )}
        {!user && (
          <NavLink
            className="text-2xl block py-2"
            to="/register"
            onClick={toggleSidebar}
          >
            Register
          </NavLink>
        )}
      </div>

      {/* Optional backdrop when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 sm:hidden z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
