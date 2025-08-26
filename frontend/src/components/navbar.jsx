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
    <nav className="flex flex-col items-start sm:flex-row sm:items-center relative text-xl justify-between gap-3 py-4 px-4 border-b md:py-6 border-gray-300">
      {/* Logo */}
      <div className="font-mono text-2xl mt-2 sm:mt-1">BINOD-B</div>

      {/* Hamburger (mobile only) */}
      <div
        className="sm:hidden absolute right-3 flex items-center justify-center bg-gray-600 size-10 text-white rounded-full cursor-pointer"
        onClick={toggleSidebar}
      > 
        <i className="ri-menu-line text-2xl"></i>
      </div>

      {/* Desktop nav */}
      <div className="hidden sm:flex justify-evenly w-[50%] text-[1rem] font-sans">
        <NavLink className={(e) => (e.isActive ? "border-b" : "")} to="/">
          Home
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "border-b" : "")}
          to="/contact"
        >
          Contact
        </NavLink>
        {user ? (
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
        ) : (
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
        } transition-transform duration-300 ease-in-out sm:hidden z-40 p-5`}
      >
        <button type="button" className="mb-5 text-2xl" onClick={toggleSidebar}>
          <i className="ri-close-large-line text-3xl"></i>
        </button>
        <NavLink className="text-2xl block py-2" to="/" onClick={toggleSidebar}>
          Home
        </NavLink>
        <NavLink className="text-2xl block py-2" to="/contact" onClick={toggleSidebar}>
          Contact
        </NavLink>
        {user ? (
          <>
            <NavLink
              className="block py-2"
              to="/products"
              onClick={toggleSidebar}
            >
              Products
            </NavLink>
            <NavLink
              className="block py-2"
              to="/logout"
              onClick={toggleSidebar}
            >
              Logout
            </NavLink>
          </>
        ) : (
          <NavLink
            className="text-2xl block py-2"
            to="/register"
            onClick={toggleSidebar}
          >
            Register
          </NavLink>
        )}
      </div>

      {/* Search input (Amazon style) */}
      <div className="w-full sm:flex-1 max-w-xl sm:mx-4 mt-3 sm:mt-0">
        <div className="flex items-center bg-[#f5f5f5] rounded-md overflow-hidden border border-gray-300">
          <input
            className="w-full px-4 py-2 text-sm bg-transparent outline-none"
            type="text"
            placeholder="What are you looking for?"
          />
          <button className="bg-yellow-400 px-4 py-2 hover:bg-yellow-500 transition">
            <i className="ri-search-line text-black text-lg"></i>
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 sm:hidden z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
