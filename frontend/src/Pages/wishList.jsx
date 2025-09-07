import ProductCard from "../components/wishList/wishlistCard";
import { wishlistItems } from "../components/wishList/data";

const WishList = () => {
  const itemCount = wishlistItems.length;

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-normal">Wishlist ({itemCount})</h2>
          <button className="border border-gray-300 rounded-sm px-6 py-2 text-sm hover:bg-gray-100 transition-colors">
            Move All To Bag
          </button>
        </div>

        {/* Responsive Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {wishlistItems.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              price={item.price}
              originalPrice={item.originalPrice}
              discount={item.discount}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WishList
