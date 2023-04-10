import React from "react";
import person from "../../assets/images/person.png";

const Banner = () => {
  return (
    <div className="flex items-center">
      <div>
        <h2>
          One Step
          <br />
          Closer To Your
          <br />
          Dream Job
        </h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="px-7 py-4 bg-gradient-to-r from-li-gr-fr to-li-gr-to rounded-lg font-extrabold text-xl text-white">
          Get Started
        </button>
      </div>
      <img src={person} alt="A person" />
    </div>
  );
};

export default Banner;
