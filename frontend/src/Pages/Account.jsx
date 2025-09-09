import { useState } from "react";
import AccountDashbard from "../components/userAccount/accountDashboard";
import Footer from "../components/footer/footer";
import UserProfileCategoryMobile from "../components/userAccount/mobileUserAccountOption";
import AccountAside from "../components/userAccount/asideAccount";
import { Outlet } from "react-router-dom";

const Account = () => {
  const [activeTab, setActiveTab] = useState("My Profile");

  const navItems = [
    {
      title: "Manage My Account",
      items: ["My Profile", "Address Book", "My Payment Options"],
    },
    {
      title: "My Orders",
      items: ["My Returns", "My Cancellations", "My Wishlist"],
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Address Book":
        return <div>Address Book content goes here...</div>;
      case "My Payment Options":
        return <div>Payment Options content goes here...</div>;
      case "My Returns":
        return <div>My Returns content goes here...</div>;
      case "My Cancellations":
        return <div>My Cancellations content goes here...</div>;
      case "My Wishlist":
        return <div>My Wishlist content goes here...</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-neutral-100 p-4 font-sans text-gray-800 lg:p-10">
        {/* Mobile Header */}
        <UserProfileCategoryMobile
          navItems={navItems}
          setActiveTab={setActiveTab}
        />

        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row">
          {/* Sidebar Navigation */}
          <AccountAside activeTab={activeTab} setActiveTab={setActiveTab} />

          {/*All Account Content */}
          <Outlet />

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
