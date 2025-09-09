import { NavLink } from "react-router-dom";

const AccountAside = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="hidden w-full space-y-4 md:block md:w-1/4 lg:w-1/5">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold">Manage My Account</h2>
        <nav className="space-y-2">
          <NavLink
            to="/account/myReturns"
            className={(e) =>
              `block cursor-pointer rounded-lg p-2 font-medium transition-colors duration-200 hover:bg-red-50 hover:text-red-500 ${e.isActive ? "bg-red-100 text-red-600" : "text-gray-600"}`
            }
          >
            my Returns
          </NavLink>
          <NavItem
            label="My Profile"
            active={activeTab === "My Profile"}
            onClick={() => setActiveTab("My Profile")}
          />
          <NavItem
            label="Address Book"
            active={activeTab === "Address Book"}
            onClick={() => setActiveTab("Address Book")}
          />
          <NavItem
            label="My Payment Options"
            active={activeTab === "My Payment Options"}
            onClick={() => setActiveTab("My Payment Options")}
          />
        </nav>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold">My Orders</h2>
        <nav className="space-y-2">
          <NavItem
            label="My Returns"
            active={activeTab === "My Returns"}
            onClick={() => setActiveTab("My Returns")}
          />
          <NavItem
            label="My Cancellations"
            active={activeTab === "My Cancellations"}
            onClick={() => setActiveTab("My Cancellations")}
          />
          <NavItem
            label="My Wishlist"
            active={activeTab === "My Wishlist"}
            onClick={() => setActiveTab("My Wishlist")}
          />
        </nav>
      </div>
    </aside>
  );
};

export default AccountAside;

const NavItem = ({ label, active, onClick }) => {
  return (
    <div
      className={`cursor-pointer rounded-lg p-2 font-medium transition-colors duration-200 hover:bg-red-50 hover:text-red-500
      ${active ? "bg-red-100 text-red-600" : "text-gray-600"}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};
