const HeroSection = ({ contactRef }) => {
  return (
    <div className="relative w-full h-[50vh] pt-50 bg-[url('/src/assets/herosection/headerbanner1.jpg')] bg-cover">
      {" "}
      {/* Increased height with h-96 */}
      {/* Overlay for gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/100 to-transparent"></div>{" "}
      {/* Added overlay with bottom-up gradient */}
      {/* Content - positioned above the overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto ">
        {" "}
        {/* Added relative, z-10, justify-center, h-full */}
        <p className="max-w-4xl mx-auto mb-4 text-center text-sm text-balance text-black md:mb-8 lg:mb-8 md:text-2xl">
          {" "}
          {/* Changed text color to white for better contrast */}
          Your go-to destination for quality electrical solutions.
        </p>
        <button
          onClick={() =>
            contactRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-4 py-3 mx-2 font-medium border-blue-600 rounded-xs shadow-xs border-1 bg-linear-to-r from-blue-400 to-blue-800 text-amber-50 hover:to-blue-600  md:mb-4 lg:mb-4 md:px-6 md:py-4 md:text-lg cursor-pointer motion-preset-bounce "
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
