import { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileNavView = ({ user }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div
        className="sm:hidden absolute right-3 flex items-center justify-center bg-gray-600 size-10 text-white rounded-full cursor-pointer"
        onClick={toggleSidebar}
      >
        {/* Hamburger (mobile only) */}
        <i className="ri-menu-line text-2xl"></i>
      </div>
      <div>
        <div
          className={`fixed top-0 right-0 text-right pr-5 h-full w-64 bg-gray-800 text-white transform ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out sm:hidden z-40 p-5`}
        >
          <button
            type="button"
            className="mb-5 text-2xl"
            onClick={toggleSidebar}
          >
            <i className="ri-close-large-line text-3xl"></i>
          </button>
          <NavLink
            className="text-2xl block py-2"
            to="/"
            onClick={toggleSidebar}
          >
            Home
          </NavLink>
          <NavLink
            className="text-2xl block py-2"
            to="/contact"
            onClick={toggleSidebar}
          >
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
                to="/account"
                onClick={toggleSidebar}
              >
                Account
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

        {/* Backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 sm:hidden z-30"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </>
  );
};

export default MobileNavView;
