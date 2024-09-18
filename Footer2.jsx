import '../../../src/index.css'

const Footer2 = () => {
  return (
    <div className="text-center bg-[#0D0D15] p-6 md:p-14">
      <p style={{ fontFamily: "Maxima Nouva" }}  className="text-[38px] md:text-6xl text-white font-MaximaNouva">
        Let’s turn your business <br /> into an iconic Brand.
      </p>
      <button
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-base md:text-xl lg:text-2xl w-52 md:w-56 lg:w-64 h-16 md:h-16 lg:h-20 mt-6 md:mt-8 lg:mt-10 bg-yellow-300 hover:bg-[#F1F1FF] text-black font-MaximaNouva"
        aria-label="Schedule a call"
      >
        Schedule a call
      </button>
    </div>
  );
};

export default Footer2;
