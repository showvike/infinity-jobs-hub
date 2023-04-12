import React from "react";
import Person from "../../assets/images/person.png";

const Banner = () => {
  return (
    <div className="text-center md:w-full pt-5 md:pt-10 md:flex items-center gap-8 bg-gradient-to-r from-li-gr-fr/[.05] to-li-gr-to/[.05]">
      <div className="md:w-1/2 pl-3 md:pl-24">
        <h2 className="font-extrabold text-7xl text-dark-01 leading-tight">
          One Step
          <br />
          Closer To Your
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-li-gr-fr to-li-gr-to">
            Dream Job
          </span>
        </h2>
        <p className="mt-2 md:mt-4 font-medium text-lg text-dark-03">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="mt-3 md:mt-6 px-7 py-4 bg-gradient-to-r from-li-gr-fr to-li-gr-to rounded-lg font-extrabold text-xl text-white">
          Get Started
        </button>
      </div>
      <img className="md:w-1/2" src={Person} alt="A person" />
    </div>
  );
};

export default Banner;
