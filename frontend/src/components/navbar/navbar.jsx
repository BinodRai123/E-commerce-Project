import { useSelector } from "react-redux";
import DesktopNavView from "./desktopNavView/desktopNavView";
import MobileNavView from "./mobileNavView/mobileNavView";

const Navbar = () => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <nav className="flex flex-col items-start sm:flex-row sm:items-center relative text-xl justify-between gap-3 py-4 px-4 border-b md:py-6 border-gray-300">
      {/* Logo */}
      <div className="font-mono text-2xl mt-2 sm:mt-1">BINOD-B</div>

      {/* Desktop navigation view */}
      <DesktopNavView user={user} />

      {/* Mobile Sidebar */}
      <MobileNavView user={user} />

      {/* Search input */}
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
    </nav>
  );
};

export default Navbar;
