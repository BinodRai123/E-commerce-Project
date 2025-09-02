import React, { useState } from 'react';

const Account = () => {
  const [activeTab, setActiveTab] = useState('My Profile');

  const navItems = [
    { title: 'Manage My Account', items: ['My Profile', 'Address Book', 'My Payment Options'] },
    { title: 'My Orders', items: ['My Returns', 'My Cancellations', 'My Wishlist'] },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'My Profile':
        return <ProfileForm />;
      case 'Address Book':
        return <div>Address Book content goes here...</div>;
      case 'My Payment Options':
        return <div>Payment Options content goes here...</div>;
      case 'My Returns':
        return <div>My Returns content goes here...</div>;
      case 'My Cancellations':
        return <div>My Cancellations content goes here...</div>;
      case 'My Wishlist':
        return <div>My Wishlist content goes here...</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 p-4 font-sans text-gray-800 lg:p-10">
      {/* Mobile Header */}
      <div className="mb-4 flex items-center justify-between rounded-lg p-4 shadow-lg md:hidden">
        <h1 className="text-sm sm:text-xl">My Account</h1>
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="rounded-md border p-2"
        >
          {navItems.flatMap(group => [
            <optgroup key={group.title} label={group.title}>
              {group.items.map(item => (
                <option key={item} value={item}>{item}</option>
              ))}
            </optgroup>
          ])}
        </select>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row">
        {/* Sidebar Navigation */}
        <aside className="hidden w-full space-y-4 md:block md:w-1/4 lg:w-1/5">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold">Manage My Account</h2>
            <nav className="space-y-2">
              <NavItem
                label="My Profile"
                active={activeTab === 'My Profile'}
                onClick={() => setActiveTab('My Profile')}
              />
              <NavItem
                label="Address Book"
                active={activeTab === 'Address Book'}
                onClick={() => setActiveTab('Address Book')}
              />
              <NavItem
                label="My Payment Options"
                active={activeTab === 'My Payment Options'}
                onClick={() => setActiveTab('My Payment Options')}
              />
            </nav>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold">My Orders</h2>
            <nav className="space-y-2">
              <NavItem
                label="My Returns"
                active={activeTab === 'My Returns'}
                onClick={() => setActiveTab('My Returns')}
              />
              <NavItem
                label="My Cancellations"
                active={activeTab === 'My Cancellations'}
                onClick={() => setActiveTab('My Cancellations')}
              />
              <NavItem
                label="My Wishlist"
                active={activeTab === 'My Wishlist'}
                onClick={() => setActiveTab('My Wishlist')}
              />
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="w-full rounded-lg bg-white p-6 shadow-lg md:w-3/4 lg:w-4/5">
          <div className="mb-6 flex justify-end text-gray-600">
            Welcome! Md Rimel
          </div>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

const NavItem = ({ label, active, onClick }) => {
  return (
    <div
      className={`cursor-pointer rounded-lg p-2 font-medium transition-colors duration-200 hover:bg-red-50 hover:text-red-500
      ${active ? 'bg-red-100 text-red-600' : 'text-gray-600'}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

const ProfileForm = () => {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">Edit Your Profile</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormGroup label="First Name" placeholder="Md" />
        <FormGroup label="Last Name" placeholder="Rimel" />
        <FormGroup label="Email" placeholder="rimel111@gmail.com" />
        <FormGroup label="Address" placeholder="Kingston, 5236, United State" />
      </div>
      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold">Password Changes</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormGroup label="Current Password" type="password" />
          <div /> {/* Spacer for layout */}
          <FormGroup label="New Password" type="password" />
          <div /> {/* Spacer for layout */}
          <FormGroup label="Confirm New Password" type="password" />
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-end gap-4 md:flex-row">
        <button
          type="button"
          className="w-full rounded-lg border-2 border-red-500 px-6 py-3 font-medium text-red-500 transition-colors hover:bg-red-50 md:w-auto"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-full rounded-lg bg-red-500 px-6 py-3 font-medium text-white transition-colors hover:bg-red-600 md:w-auto"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

const FormGroup = ({ label, placeholder, type = 'text' }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 font-semibold text-gray-700">{label}</label>
      <input
        type={type}
        className="rounded-md border border-gray-300 p-3 placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Account;
