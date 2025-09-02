import { NavLink } from "react-router-dom";

const PagenotFound = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-5">
        <h1 className="text-4xl sm:text-7xl font-medium">404 Not Found</h1>
        <small className="md:text-sm">Your visited page not found. You may go home page</small>
        <NavLink className="button text-2xl mt-10" to="/">
          Back To home page
        </NavLink>
      </div>
    </>
  );
};

export default PagenotFound;
