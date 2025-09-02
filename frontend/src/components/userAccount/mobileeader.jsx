const MobileHeader = ({navItems, activeTab, setActiveTab}) => {
 
  return (
    <div className="mb-4 bg-white flex items-center justify-between rounded-lg p-2 shadow-md md:hidden">
      <h1 className="text-sm sm:text-xl">Account</h1>
      <select
        value={activeTab}
        onChange={(e) => setActiveTab(e.target.value)}
        className="text-sm rounded-md border p-2"
      >
        {navItems.map((group) => [
          <optgroup key={group.title} label={group.title}>
            {group.items.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </optgroup>,
        ])}
      </select>
    </div>
  );
};

export default MobileHeader;
