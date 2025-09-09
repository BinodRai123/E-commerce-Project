import { NavLink } from "react-router-dom";

const AccountAside = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="hidden w-full space-y-4 md:block md:w-1/4 lg:w-1/5">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold">Manage My Account</h2>
        <nav className="space-y-2">
          <NavItem
            label="My Profile"
            path="myDashboard"
          />
          <NavItem
            label="Address Book"
            path="address-book"
          />
          <NavItem
            label="My Payment Options"
            path="payment-options"
          />
        </nav>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold">My Orders</h2>
        <nav className="space-y-2">
          <NavItem
            label="My Returns"
            path="myReturns"
          />
          <NavItem
            label="My Cancellations"
            path="underWork"
          />
          <NavItem
            label="My Wishlist"
            path="underWork"
          />
        </nav>
      </div>
    </aside>
  );
};

export default AccountAside;

const NavItem = ({ path, label }) => {
  return (
    <NavLink
      to={path}
      className={(e) =>
        `block cursor-pointer rounded-lg p-2 font-medium transition-colors duration-200 hover:bg-red-50 hover:text-red-500 ${
          e.isActive ? "bg-red-100 text-red-600" : "text-gray-600"
        }`
      }
    >
      {label}
    </NavLink>
  );
};
