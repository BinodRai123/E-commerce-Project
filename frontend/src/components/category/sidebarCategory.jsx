const SidebarCategory = ({categories}) => {
  return (<div className="sticky top-0 bg-white shadow p-4 h-screen">
          <h2 className="font-bold text-lg mb-4">Exclusive</h2>
          <ul className="space-y-4">
            {categories.map((cat, ind) => (
              <li key={ind} className="category-item">
                {cat}
              </li>
            ))}
          </ul>
        </div>)
}

export default SidebarCategory
