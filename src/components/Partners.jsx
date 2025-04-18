import { partners } from "../constants"; // Importing the list of partners from a constants file

const Partners = () => {
  return (
    <div className="mt-20 tracking-wide min-h-[300px]  border-blue-700">
      {/* Separate div for the border at the bottom */}
      <div className="border-b border-blue-700 max-w-4xl mx-auto"></div>
      {/* Section title */}
      <h2 className="pt-20 mt-6 text-5xl tracking-wide text-center sm:text-5xl lg:text-6xl">
        OUR{" "}
        <span className="text-transparent bg-linear-to-r from-blue-500 to-blue-700 bg-clip-text">
          PARTNERS
        </span>
        <br></br> <br></br>
      </h2>

      {/* Container for partner logos */}
      <div className="flex flex-wrap justify-center">
        {partners.map((partner, index) => (
          <div key={index} className="w-full px-4 py-2 sm:w-1/2 lg:w-1/3">
            {/* Individual partner card */}
            <div className="p-4 border-1 border-blue-700 rounded-md bg-neutral-900">
              <a
                href="https://www.generac.com" // Link to partner's website
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Prevents security vulnerabilities
              >
                <img
                  className="w-full rounded-md h-30 object-contain" // Styling for the partner logo
                  src={partner.image} // Partner logo image source
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer section with certification text */}
      <div className="flex items-center justify-center pt-6">
        <span className="text-2xl text-center text-transparent bg-linear-to-r from-orange-700 to-orange-600 bg-clip-text">
          Certified Generac Installer
        </span>
      </div>
    </div>
  );
};

export default Partners; // Exporting the component for use in other parts of the application
