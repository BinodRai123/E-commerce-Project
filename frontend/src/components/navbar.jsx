import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-5 text-xl justify-center">
      <NavLink className={e => e.isActive ? "border-b" : ""} to="/">Home</NavLink>
      <NavLink className={e => e.isActive ? "border-b" : ""} to="/register">Register</NavLink>
    </nav>
  );
};

export default Navbar;
