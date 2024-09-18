import "./banner.css"; // Ensure this path is correct
import "../../../src/index.css"; // Ensure this path is correct
import grp1 from "../../assets/Spin/Group1.svg"; // Ensure this path is correct
import grp2 from "../../assets/Spin/Group2.svg"; // Ensure this path is correct
import grp3 from "../../assets/Spin/Group3.svg"; // Ensure this path is correct
import grp4 from "../../assets/Spin/Group4.svg"; // Ensure this path is correct

const Banner = () => {
  return (
    <div className="text-center w-full h-full -mt-24">
      <div className="mt-36 p-4 md:p-8 lg:p-12">
        <h2
          style={{ fontFamily: "Maxima Nouva" }}
          className="text-[38px] md:text-7xl lg:text-6xl mt-24 md:mt-32 lg:mt-10 text-white banner-heading"
        >
          We specialize turning your <br /> business into a Brand.
        </h2>
        <button
          style={{ fontFamily: "Maxima Nouva" }}
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-base md:text-xl lg:text-xl w-52 md:w-56 lg:w-64 h-16 md:h-16 lg:h-20 mt-6 md:mt-8 lg:mt-10 hover:bg-yellow-300 bg-[#F1F1FF] text-black"
        >
          Schedule a call
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mx-4 md:mx-12 lg:mx-28 -mt-2">
        <div className="circular-text-container flex justify-center items-center mb-6 md:mb-10 mx-auto">
          <div className="circular-text-wrapper">
            <div className="circle flex justify-center items-center">
              <img src={grp1} alt="Rotating Graphic 1" />
            </div>
          </div>
        </div>
        <div className="circular-text-container flex justify-center items-center mb-6 md:mb-10 mx-auto">
          <div className="circular-text-wrapper">
            <div className="circle flex justify-center items-center">
              <img src={grp2} alt="Rotating Graphic 2" />
            </div>
          </div>
        </div>
        <div className="circular-text-container flex justify-center items-center mb-6 md:mb-10 mx-auto">
          <div className="circular-text-wrapper">
            <div className="circle flex justify-center items-center">
              <img src={grp3} alt="Rotating Graphic 3" />
            </div>
          </div>
        </div>
        <div className="circular-text-container flex justify-center items-center mb-6 md:mb-10 mx-auto">
          <div className="circular-text-wrapper">
            <div className="circle flex justify-center items-center">
              <img src={grp4} alt="Rotating Graphic 4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
