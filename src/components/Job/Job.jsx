import React from "react";

const Job = ({ job }) => {
  const { logo, title, name, type, time, location, salary } = job;

  return (
    <div className="py-10 pl-10 border border-solid border-dark-06 rounded-lg">
      <img src={logo} alt={name} />
      <h3>{title}</h3>
      <p>{name}</p>
      <button>{type}</button>
      <button>{time}</button>
      <p>
        <span>{location}</span>
        <span>Salary: {salary}</span>
      </p>
    </div>
  );
};

export default Job;
