import React from "react";
import { useLoaderData } from "react-router-dom";
import Calender from "../../assets/icons/calender.png";
import Email from "../../assets/icons/email.png";
import Frame from "../../assets/icons/frame.png";
import Location from "../../assets/icons/location-0.png";
import Phone from "../../assets/icons/phone.png";

const ViewDetails = () => {
  const {
    description,
    responsibilities,
    educations,
    experiences,
    salary,
    title,
    contact: { phone, email },
    location,
  } = useLoaderData();

  return (
    <div>
      <div className="py-16 bg-gradient-to-r from-li-gr-fr/[.05] to-li-gr-to/[.05]">
        <h2 className="text-center font-extrabold text-3xl text-dark-01">
          Job Details
        </h2>
      </div>
      <div className="mt-16 px-24 grid grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col gap-6">
          <p className="font-medium text-dark-03">
            <p className="font-extrabold text-dark-01 mb-4">Job Description:</p>
            {description}
          </p>
          <p className="font-medium text-dark-03">
            <p className="font-extrabold text-dark-01 mb-4">
              Job Responsibility:
            </p>
            {responsibilities}
          </p>
          <p className="font-medium text-dark-03">
            <p className="font-extrabold text-dark-01 mb-4">
              Educational Requirements:
            </p>
            {educations}
          </p>
          <p className="font-medium text-dark-03">
            <p className="font-extrabold text-dark-01 mb-4">Experiences:</p>
            {experiences}
          </p>
        </div>
        <div>
          <div className="bg-gradient-to-r from-li-gr-fr/[.1] to-li-gr-to/[.1] rounded-lg p-7">
            <div>
              <h3 className="font-extrabold text-xl text-dark-01">
                Job Details
              </h3>
              <hr className="my-6" />
              <div className="flex flex-col gap-4">
                <p className="font-medium text-xl text-dark-03">
                  <img className="inline mr-2" src={Frame} alt="Frame icon" />
                  <span className="font-bold text-xl text-dark-02">
                    Salary:{" "}
                  </span>
                  {salary}
                </p>
                <p className="font-medium text-xl text-dark-03">
                  <img
                    className="inline mr-2"
                    src={Calender}
                    alt="Calender icon"
                  />
                  <span className="font-bold text-xl text-dark-02">
                    Job Title:{" "}
                  </span>
                  {title}
                </p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-extrabold text-xl text-dark-01">
                Contact Information
              </h3>
              <hr className="my-6" />
              <div className="flex flex-col gap-4">
                <p className="font-medium text-xl text-dark-03">
                  <img className="inline mr-2" src={Phone} alt="Phone icon" />
                  <span className="font-bold text-xl text-dark-02">
                    Phone:{" "}
                  </span>
                  {phone}
                </p>
                <p className="font-medium text-xl text-dark-03">
                  <img className="inline mr-2" src={Email} alt="Email icon" />
                  <span className="font-bold text-xl text-dark-02">
                    Email:{" "}
                  </span>
                  {email}
                </p>
                <p className="font-medium text-xl text-dark-03">
                  <img
                    className="inline mr-2"
                    src={Location}
                    alt="Location icon"
                  />
                  <span className="font-bold text-xl text-dark-02">
                    Address:{" "}
                  </span>
                  {location}
                </p>
              </div>
            </div>
          </div>
          <button className="mt-6 bg-gradient-to-r from-li-gr-fr to-li-gr-to w-full py-4 rounded-lg font-extrabold text-xl text-white">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
