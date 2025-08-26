import { useState } from "react";
import MobileCategorybar from "../components/mobileCategorybar";
import SidebarCategory from "../components/sidebarCategory";
import ProductCard from "../components/productCard";
import Services from "../components/services";

const categories = [
  "Woman’s Fashion",
  "Men’s Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:flex">
      {/* desktop-category-Sidebar */}
      <div className="hidden md:inline-block w-[250px]">
        <SidebarCategory categories={categories} />
      </div>

      {/* mobile-category-bar */}
      <MobileCategorybar categories={categories} />

      {/* Main content */}
      <div className="flex-1 min-h-screen md:w-[70%] p-2 md:p-4">
        {/* Hero-Section-Image */}
        <div className="hero-section mt-5 md:mt-0">
          <img
            className="object-cover object-center w-full aspect-square sm:aspect-video md:aspect-[16/7]"
            src="/src/assets/hero-section-image/hero-section-image.jpeg"
            alt="Hero"
          />
        </div>

        {/* Product cards */}
        <div className="py-10 border-b-2 border-gray-300">
          <div className="flex gap-5 items-center">
            <div className="h-10 rounded w-5 bg-red-500"></div>
            <small className="text-red-500 text-xl">Today's</small>
          </div>
          <h1 className=" font-medium text-4xl my-5 md:my-8">Flash Sales</h1>

          {/* product card lists */}
          <div className="overflow-x-auto w-full">
            <div className="flex space-x-4 px-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 sm:w-56 md:w-60 lg:w-64"
                >
                  <ProductCard />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Advertisement-section */}
        <div className="advertisement-section">
          <img
            className="object-contain aspect-[16/9] md:object-contain md:aspect-video"
            src="/src/assets/advertisement/advertisement_img.png"
            alt=""
          />
        </div>

        {/* Our Product section */}
        <div className="py-10 border-b-2 border-gray-300">
          <div className="flex gap-5 items-center">
            <div className="h-10 rounded w-5 bg-red-500"></div>
            <small className="text-red-500 text-xl">Our Products</small>
          </div>
          <h1 className=" font-medium text-4xl my-5 md:my-8">
            Explore Our Products
          </h1>

          {/* product card lists */}
          <div className="overflow-x-auto w-full">
            <div className="flex md:flex-wrap md:justify-center gap-10 px-2">
              {categories.map((category, index) => (
                <div key={index} className="flex-shrink-0">
                  <ProductCard />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center my-10">
            <button className="text-xl button">View All Products</button>
          </div>
        </div>

        {/* Services section */}
        <section className="services py-10 flex flex-wrap justify-center gap-10">
          <Services
            img={"/src/assets/svg/transport.svg"}
            services={"FREE AND FAST DELIVERY"}
            add_info={"Free delivery for all orders over $140"}
          />
          <Services
            img={"/src/assets/svg/headphone.svg"}
            services={"24/7 CUSTOMER SERVICE"}
            add_info={"Friendly 24/7 customer support"}
          />
          <Services
            img={"/src/assets/svg/security.svg"}
            services={"MONEY BACK GUARANTEE"}
            add_info={"We reurn money within 30 days"}
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
