import { FaCheck } from "react-icons/fa";
import '../../../src/index.css';

const Delivery = () => {
  return (
    <div className="text-center mb-11 p-11">
      <h2 style={{ fontFamily: 'Maxima Nouva' }} className="text-white text-[38px] lg:text-7xl lg:mt-28 -mt-20 p-4 mb-28">
        Flexible plan, <br /> faster delivery.
      </h2>
      <div className="grid md:grid-cols-3 gap-4 px-4 md:px-40 lg:mb-14 -mt-7">
        {/* Basic Plan */}
        <div className="card lg:w-[350px] h-[500px] shadow-xl bg-gradient-to-t from-[#525280] to-[#10101A] mr-5 p-6 relative">
          <h4 style={{ fontFamily: 'Maxima Nouva' }} className="text-white text-2xl -ml-[250px] mt-4  items-start">
            Basic
          </h4>
          <p style={{ fontFamily: 'Maxima Nouva' }} className="text-white -ml-52 mt-6 text-5xl font-bold">
            $399
          </p>
          <ul className="space-y-2 mt-10 mb-8">
            <li className="flex items-center">
              <FaCheck className="text-white mr-3" />
              <span style={{ fontFamily: 'Maxima Nouva' }} className="text-white">1 Logo Concept</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-white mr-3" />
              <span style={{ fontFamily: 'Maxima Nouva' }} className="text-white">Logo Presentation</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-white mr-3" />
              <span style={{ fontFamily: 'Maxima Nouva' }} className="text-white">Source & Vector Files</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-white mr-3" />
              <span style={{ fontFamily: 'Maxima Nouva' }} className="text-white">3 Revisions</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-white mr-3" />
              <span style={{ fontFamily: 'Maxima Nouva' }} className="text-white">3 days delivery</span>
            </li>
          </ul>
          <button style={{ fontFamily: 'Maxima Nouva' }} className="mt-auto bg-white text-black text-xl w-full h-12 p-3 rounded-md hover:bg-yellow-300 border-none">
            Choose Plan
          </button>
        </div>

        {/* Standard Plan */}
        <div className="card lg:w-[352px] h-[500px] shadow-xl bg-gradient-to-t from-[#525280] to-[#10101A] p-6 mr-5 relative">
          <button style={{ fontFamily: 'Maxima Nouva' }} className="btn btn-warning text-xl bg-yellow-300 lg:-mt-6 lg:w-32 lg:ml-[200px] w-32 -mt-6 ml-[240px]  rounded-none rounded-tr-lg rounded-bl-lg">
            Popular
          </button>
          <h4 style={{ fontFamily: 'Maxima Nouva' }} className="text-white text-2xl -ml-56  items-start">
            Standard
          </h4>
          <p style={{ fontFamily: 'Maxima Nouva' }} className="text-white -ml-52 text-5xl font-bold mt-6">
          $599
          </p>
          <ul className="space-y-2 mt-10 mb-8">
            <li className="flex items-center">
              <FaCheck className="text-white mr-3" />
              <span style={{ fontFamily: 'Maxima Nouva' }} className="text-white">3 Logo Concepts</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-white mr-3" />
              <span style={{ fontFamily: 'Maxima Nouva' }} className="text-white">Brand Guideline</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-white mr-3" />
              <span style={{ fontFamily: 'Maxima Nouva' }} className="text-white">Brand Presentation</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-white mr-3" />
              <span style={{ fontFamily: 'Maxima Nouva' }} className="text-white">Source & Vector Files</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-white mr-3" />
              <span style={{ fontFamily: 'Maxima Nouva' }} className="text-white">Unlimited Revisions</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-white mr-3" />
              <span style={{ fontFamily: 'Maxima Nouva' }} className="text-white">5 days delivery</span>
            </li>
          </ul>
          <button style={{ fontFamily: 'Maxima Nouva' }} className="mt-auto rounded-md bg-white text-black text-xl w-full h-12 p-3 hover:bg-yellow-300 border-none">
            Choose Plan
          </button>
        </div>

        {/* Custom Plan */}
        <div className="card lg:w-[350px] h-[500px] shadow-xl bg-gradient-to-t from-[#525280] to-[#10101A] p-6 mr-5 relative">
          <h4 style={{ fontFamily: 'Maxima Nouva' }} className="text-white text-2xl -ml-56 mt-6  items-start">
            Custom
          </h4>
          <p className="text-white font-bold -ml-16 mt-6 text-4xl">
            On Discussion
          </p>
          <ul className="space-y-2 mt-10 mb-8">
            <li className="flex items-center">
              <FaCheck className="text-white mr-3" />
              <span style={{ fontFamily: 'Maxima Nouva' }} className="text-white">Brand Identity</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-white mr-3" />
              <span style={{ fontFamily: 'Maxima Nouva' }} className="text-white">Packaging</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-white mr-3" />
              <span style={{ fontFamily: 'Maxima Nouva' }} className="text-white">Business Card</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-white mr-3" />
              <span style={{ fontFamily: 'Maxima Nouva' }} className="text-white">Social Media Kit</span>
            </li>
          </ul>
          <button style={{ fontFamily: 'Maxima Nouva' }} className="mt-auto rounded-md bg-white text-black text-xl w-full h-12 p-3 hover:bg-yellow-300 border-none">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
