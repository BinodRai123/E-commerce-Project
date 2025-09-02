import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 lg:px-20 py-12 text-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

        {/* Exclusive / Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Exclusive</h3>
          <p className="mb-2 font-semibold">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <form className="flex items-center border border-gray-500 rounded overflow-hidden w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black text-white px-3 py-2 w-full focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2"
            >
              →
            </button>
          </form>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <p className="mb-1">Gaighat-15, Nepal.</p>
          <p className="mb-1">Binod@gmail.com</p>
          <p className="mb-1">+985741523</p>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Account</h3>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Link</h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Download App</h3>
          <p className="text-xs mb-3">Save $3 with App New User Only</p>
          <div className="flex space-x-2 mb-4">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=https://play.google.com"
              alt="QR Code"
              className="w-32 aspect-square object-contain`"
            />
            <div className="flex flex-col space-y-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="grow"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="grow"
              />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-lg">
            <i className="fab fa-facebook-f cursor-pointer hover:text-gray-400"></i>
            <i className="fab fa-twitter cursor-pointer hover:text-gray-400"></i>
            <i className="fab fa-instagram cursor-pointer hover:text-gray-400"></i>
            <i className="fab fa-linkedin-in cursor-pointer hover:text-gray-400"></i>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-12 text-xs">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
