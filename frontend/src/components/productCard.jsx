import { Heart, Eye } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="relative inline-block max-w-xs bg-white shadow-md rounded-2xl">
      {/* Discount Badge */}
      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg z-10">
        -40%
      </span>

      {/* Product Image */}
      <div className="flex justify-center items-center p-4">
        <img
          src="/src/assets/productCard-image/product_image.jpg" // replace with your image path
          alt="HAVIT HV-G92 Gamepad"
          className="w-full h-48 object-contain"
        />

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button className="productCard-icon">
            <Heart size={18} />
          </button>
          <button className="productCard-icon">
            <Eye size={18} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h2 className="text-sm font-sans sm:text-base font-semibold text-gray-800">
          HAVIT HV-G92 Gamepad
        </h2>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-red-500 font-bold text-lg">$120</span>
          <span className="text-gray-400 line-through text-sm">$160</span>
        </div>

        {/* Rating */}
        <div className="flex items-center mt-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">
                ★
              </span>
            ))}
          <span className="ml-2 text-sm text-gray-600">(88)</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;