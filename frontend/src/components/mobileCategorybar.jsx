const MobileCategorybar = ({categories}) => {
  return <div className="md:hidden bg-white shadow-sm overflow-x-auto border-b">
      <ul className="flex space-x-4 px-4 py-2 text-sm font-medium whitespace-nowrap">
        {categories.map((cat, idx) => (
          <li
            key={idx}
            className="cursor-pointer px-3 py-1 rounded-full border text-gray-700 hover:bg-green-700 hover:text-white transition"
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
}

export default MobileCategorybar
