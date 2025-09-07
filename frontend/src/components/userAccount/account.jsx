import { useState } from "react";
import UserProfileCategoryMobile from "./mobileUserAccountOption";
import AccountAside from "./asideAccount";
import UserDetailForm from "./userDetailForm";

const AccountDashbard = () => {
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
    <div className="min-h-screen bg-neutral-100 p-4 font-sans text-gray-800 lg:p-10">
      {/* Mobile Header */}
      <UserProfileCategoryMobile navItems={navItems} setActiveTab={setActiveTab} />

      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row">
        {/* Sidebar Navigation */}
        <AccountAside activeTab={activeTab} setActiveTab={setActiveTab}/>

        {/* Main Content Area */}
        <main className="w-full rounded-lg bg-white p-6 shadow-lg md:w-3/4 lg:w-4/5">
          {/* User Account Form */}
          <UserDetailForm />
        </main>
      </div>
    </div>
  );
};





export default AccountDashbard;
