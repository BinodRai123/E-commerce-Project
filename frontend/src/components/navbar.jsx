import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {user} = useSelector(state => state.userReducer);
  return (
    <nav className="flex gap-5 text-xl justify-center">
      <NavLink className={(e) => (e.isActive ? "border-b" : "")} to="/">
        Home
      </NavLink>

      {user ?
        <>
       <NavLink className={e => e.isActive ? "border-b" : ""} to="/products">Products</NavLink>
       <NavLink className={e => e.isActive ? "border-b" : ""} to="/logout">logout</NavLink>
       </>
       : ""}

      {!user ? <NavLink className={(e) => (e.isActive ? "border-b" : "")} to="/register">
        Register
      </NavLink> : ""}
    </nav>
  );
};

export default Navbar;
