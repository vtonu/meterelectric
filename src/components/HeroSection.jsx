const HeroSection = ({ contactRef }) => {
  return (
    <div className="flex flex-col items-center ">
      <p className="text-4xl font-bold text-center text-balance text-neutral-600 mt-[-60px]">
        METER ELECTRIC
      </p>
      <p className="pt-2 text-xl text-center text-balance text-neutral-600">
        Your go-to destination for quality electrical solutions, offering residential, commercial
        and industrial services.{' '}
      </p>
      <br />
      <button
        onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
        className="px-4 py-3 mx-2 font-medium border-blue-600 rounded-sm shadow-sm border-1 bg-gradient-to-r from-blue-400 to-blue-800 text-amber-50 hover:to-blue-600 shadow-sky-200">
        CONTACT US
      </button>
      <br />
      <div className="flex justify-center mt-2"></div>
    </div>
  );
};

export default HeroSection;
