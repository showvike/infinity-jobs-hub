import React from "react";
import Frame from "../../assets/icons/frame.png";
import Location from "../../assets/icons/location-0.png";

const Job = ({ job }) => {
  const { logo, title, name, type, time, location, salary } = job;

  return (
    <div className="py-10 pl-10 border border-solid border-dark-06 rounded-lg">
      <div className="h-14">
        <img src={logo} alt={name} />
      </div>
      <div className="mt-2">
        <h3 className="font-extrabold text-2xl text-dark-02">{title}</h3>
        <p className="mt-2 font-semibold text-xl text-dark-03">{name}</p>
        <div className="mt-4">
          <button className="outline outline-1 outline-li-gr-fr rounded px-4 py-2 text-transparent bg-clip-text bg-gradient-to-r from-li-gr-fr to-li-gr-to font-extrabold">
            {type}
          </button>
          <button className="outline outline-1 outline-li-gr-fr rounded px-4 py-2 text-transparent bg-clip-text bg-gradient-to-r from-li-gr-fr to-li-gr-to font-extrabold ml-4">
            {time}
          </button>
        </div>
        <p className="mt-4 h-16">
          <span className="font-semibold text-xl text-dark-03">
            <img className="inline mr-2" src={Location} alt="Location icon" />
            {location}
          </span>
          <span className="font-semibold text-xl text-dark-03 ml-6">
            <img className="inline mr-2" src={Frame} alt="Frame icon" />
            Salary: {salary}
          </span>
        </p>
      </div>
      <button className="px-4 py-2.5 bg-gradient-to-r from-li-gr-fr to-li-gr-to rounded-lg font-extrabold text-xl text-white">
        View Details
      </button>
    </div>
  );
};

export default Job;
