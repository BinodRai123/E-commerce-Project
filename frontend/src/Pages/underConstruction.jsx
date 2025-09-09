import React from "react";

// The main App component containing the entire under-construction card.
const underConstruction = () => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 max-w-7xl relative overflow-hidden">
      {/* Main content section with text and illustration */}
      <main className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-12 z-10 relative">
        {/* Left side: Text content */}
        <div className="relative z-10flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-4">
            Website is under contruction
          </h1>
          <p className="text-blue-500 font-bold tracking-wider uppercase text-lg mb-4">
            Lorem Ipsum Dolor
          </p>
          <p className="text-gray-600 leading-relaxed max-w-prose mb-8 font-light text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </p>
          <button className="bg-black text-white font-medium py-3 px-8 rounded-full shadow-lg hover:bg-gray-800 transition-colors">
            GET STARTED
          </button>
        </div>

        {/* Right side: Illustration (Recreated with SVG) */}
        <div className="relative md:absolute -z-10 right-0 self-center">
          <img
            src="https://www.shutterstock.com/image-illustration/3d-illustration-rendering-webpage-under-260nw-471103880.jpg"
            alt="Under Construction Illustration"
          />
        </div>
      </main>
    </div>
  );
};

export default underConstruction;
