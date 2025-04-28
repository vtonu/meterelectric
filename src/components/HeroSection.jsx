import { Check } from "lucide-react";

const HeroSection = ({ contactRef }) => {
  return (
    <div className="relative w-full min-h-[450px] h-auto max-h-[60vh] xs:max-h-[70vh] sm:h-auto bg-[url('/src/assets/herosection/headerbanner1.jpg')] bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto pt-6 xs:pt-12 sm:pt-20 sm:px-6 sm:py-8 px-2">
        <h2 className="text-3xl xs:text-4xl tracking-wide text-center sm:text-5xl lg:text-6xl mx-auto mb-4 xs:mb-6 sm:mb-8 mt-4  xs:mt-8">
          <span className="text-transparent bg-linear-to-r from-blue-500 to-blue-700 bg-clip-text font-semibold">
            Your go-to destination for quality electrical solutions.
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-4 xs:gap-6 w-full px-2 xs:px-4">
          <div className="flex flex-col md:flex-row md:justify-center items-center w-full space-y-2 xs:space-y-4 md:space-y-0 md:space-x-32 pb-4">
            <ul className="flex flex-col space-y-1 xs:space-y-2">
              {[
                "Licensed, Bonded, & Insured",
                "2-year Warranty Guarantee",
                "Transparent, Upfront Pricing",
                "Locally & Family Owned",
                "Free Estimates",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-base xs:text-lg"
                >
                  <Check
                    className={`mr-2 ${
                      index % 2 === 0 ? "text-blue-600" : "text-red-600"
                    }`}
                    size={16}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-center space-y-2 pb-4 xs:pb-8 mt-2 xs:mt-0">
              <button
                onClick={() =>
                  contactRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full max-w-[240px] px-4 xs:px-6 py-3 xs:py-4 font-medium border-blue-600 rounded-md shadow-xs border-1 bg-linear-to-r from-blue-400 to-blue-800 text-amber-50 hover:to-blue-600 text-base xs:text-lg cursor-pointer motion-preset-bounce"
              >
                GET A QUOTE TODAY
              </button>
              <button
                onClick={() => (window.location.href = "tel:425-561-9562")}
                className="w-full max-w-[240px] px-4 xs:px-6 py-3 xs:py-4 font-medium border-red-600 rounded-md shadow-xs border-1 bg-linear-to-r from-red-400 to-red-800 text-amber-50 hover:to-red-600 text-base xs:text-lg cursor-pointer motion-preset-bounce"
              >
                CALL US NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
