import { partners } from "../constants"; // Importing the list of partners from a constants file

const Partners = () => {
  return (
    <div
      className="mt-20 tracking-wide min-h-[300px] border-blue-600"
      onContextMenu={(e) => e.preventDefault()} // Disable right-click
    >
      {/* Separate div for the border at the top */}
      <div className="border-b border-blue-700 max-w-4xl mx-auto "></div>
      {/* Section title */}
      <h2 className="pt-10 mt-6 text-4xl tracking-wide text-center sm:text-5xl lg:text-6xl">
        <span className=" text-center text-transparent bg-linear-to-r from-orange-700 to-orange-600 bg-clip-text">
          Certified Generac Installer
        </span>
        <br></br> <br></br>
      </h2>

      {/* Certification description and partner logos side by side */}
      <div className="flex flex-wrap justify-center  gap-8">
        {/* Container for partner logos */}
        <div className="flex flex-wrap justify-center">
          {partners.map((partner, index) => (
            <div key={index} className="w-full px-4 py-2 sm:w-1/2 lg:w-1/1 ">
              {/* Individual partner card */}
              <div className="relative group hover:scale-102 transition-transform duration-500 ease-in-out ">
                {/* Gradient blur effect on hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-sm bg-gradient-to-br from-orange-500 via-red-600 to-blue-600 opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500 ease-in-out -z-10"
                ></div>
                <a
                  /* href="https://www.generac.com" */ // Link to partner's website
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer" // Prevents security vulnerabilities
                >
                  <img
                    className="w-full h-58 rounded-sm object-contain " // Styling for the partner logo
                    src={partner.image} // Partner logo image source
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Certification description */}
        <div className="max-w-lg text-lg text-black text-left sm:text-left sm:px-0 px-4 ">
          <p>
            Our certification means we’ve been thoroughly trained to meet
            Generac’s standards, ensuring your generator is installed correctly,
            safely, and efficiently. Choosing Meter Electric gives you peace of
            mind and reliable service— making it a smart investment in your home
            or business’s power security.
          </p>
          {/* Flex container for "Need a generator?" text and button */}
          {/* On mobile (default): column layout, centered items */}
          {/* On small screens and up (sm:): row layout, items aligned to start */}
          <div className="flex flex-col items-center mt-6 sm:flex-row sm:justify-start">
            <p className="text-3xl sm:text-4xl font-semibold text-zinc-950 mb-3 sm:mb-0 sm:mr-4 text-center sm:text-left">
              Need a generator?
            </p>
            <button
              onClick={() => (window.location.href = "tel:425-561-9562")}
              className="group w-full sm:w-auto px-6 py-3 font-medium border-orange-700 rounded-md shadow-xs border-1 bg-linear-to-r from-orange-400 to-orange-800 text-amber-50 hover:to-orange-600 text-base xs:text-lg cursor-pointer motion-preset-bounce"
            >
              <span className="block group-active:[transform:translate3d(0,1px,0)]">
                CALL NOW
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners; // Exporting the component for use in other parts of the application
