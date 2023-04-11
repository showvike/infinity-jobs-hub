import React from "react";
import { Link } from "react-router-dom";
import Frame from "../../assets/icons/frame.png";
import Location from "../../assets/icons/location-0.png";

const AppliedJob = ({ appliedJob }) => {
  const { logo, title, name, type, time, location, salary, id } = appliedJob;

  return (
    <div className="mx-24 p-7 grid grid-cols-4 items-center border border-solid border-dark-06 rounded-lg mb-6 gap-8">
      <div className="bg-dark-07 h-52 flex justify-center items-center rounded-lg">
        <img className="w-28" src={logo} alt={name} />
      </div>
      <div className="col-span-3 flex justify-between items-center">
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
        <Link to={`/job/${id}`}>
          <button className="px-4 py-2.5 bg-gradient-to-r from-li-gr-fr to-li-gr-to rounded-lg font-extrabold text-xl text-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppliedJob;
