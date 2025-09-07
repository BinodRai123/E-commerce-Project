


const ProductCard = ({ name, price, originalPrice, discount, image }) => {
  return (
    <div>
      <div className="relative group overflow-hidden bg-gray-100 rounded-sm">
        {/* Product Image */}
        <img src={image} alt={name} className="w-full h-64 object-contain transition-transform duration-300 hover:scale-105" />

        {/* Discount Badge */}
        {discount && (
          <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-sm">
            -{discount}%
          </span>
        )}

        {/* Delete Icon */}
        <button className="absolute top-4 right-4 size-9 bg-white rounded-full hover:bg-gray-200 cursor-pointer">
          <i class="ri-delete-bin-6-line text-2xl"></i>
        </button>

        {/* Add to Cart Overlay */}
        <div className="absolute w-full bottom-0 bg-black text-white flex items-center justify-center gap-2 py-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <i class="ri-shopping-cart-2-line text-2xl"></i>
          <span>Add To Cart</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h3 className="text-base font-medium">{name}</h3>
        <div className="flex items-center gap-3 mt-1">
          <p className="text-red-500 font-medium">${price}</p>
          {originalPrice && (
            <p className="text-gray-400 line-through">${originalPrice}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;