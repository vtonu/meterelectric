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
            <div key={index} className="w-full px-4 py-2 sm:w-1/2 lg:w-1/1">
              {/* Individual partner card */}
              <div className="p-6 border-1 border-blue-700 rounded-sm bg-neutral-900">
                <a
                  /* href="https://www.generac.com" */ // Link to partner's website
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
        {/* Certification description */}
        <div className="max-w-lg text-lg text-black text-left sm:text-center sm:px-0 px-4">
          Our certification means we’ve been thoroughly trained to meet
          Generac’s standards, ensuring your generator is installed correctly,
          safely, and efficiently. Choosing Meter Electric gives you peace of
          mind and reliable service— making it a smart investment in your home
          or business’s power security.
        </div>
      </div>
    </div>
  );
};

export default Partners; // Exporting the component for use in other parts of the application
