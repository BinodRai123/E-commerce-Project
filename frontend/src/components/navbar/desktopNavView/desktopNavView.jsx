import { NavLink } from "react-router-dom";

const DesktopNavView = ({user}) => {
  return (
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
              to="/wishlist"
            >
              WishList
            </NavLink>
            <NavLink
              className={(e) => (e.isActive ? "border-b" : "")}
              to="/account"
            >
              Account
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

  )
}

export default DesktopNavView
