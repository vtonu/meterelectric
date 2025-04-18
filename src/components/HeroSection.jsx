const HeroSection = ({ contactRef }) => {
  return (
    <div className="relative w-full">
      {/* Content */}
      <div className="relative flex flex-col items-center w-full max-w-6xl mx-auto ">
        <p className="max-w-4xl mx-auto mb-4 text-center text-md text-balance text-neutral-700 md:mb-8 lg:mb-8 md:text-2xl">
          Your go-to destination for quality electrical solutions, offering
          residential, commercial and industrial services.
        </p>
        <button
          onClick={() =>
            contactRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-4 py-3 mx-2 font-medium border-blue-600 rounded-xs shadow-xs border-1 bg-linear-to-r from-blue-400 to-blue-800 text-amber-50 hover:to-blue-600 shadow-sky-200 md:mb-4 lg:mb-4 md:px-6 md:py-4 md:text-lg cursor-pointer"
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
