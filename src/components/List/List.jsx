import React from "react";

const List = ({ category }) => {
  const { icon, name, jobs } = category;

  return (
    <div className="bg-gradient-to-r from-li-gr-fr/[.05] to-li-gr-to/[.05] rounded-lg pl-4 md:pl-8 py-4 md:py-8 md:w-1/4">
      <img
        className="mx-auto md:mx-0 bg-gradient-to-r from-li-gr-fr/[.1] to-li-gr-to/[.1] p-3 rounded-lg"
        src={icon}
        alt={name}
      />
      <div className="mt-3 md:mt-6">
        <h3 className="font-extrabold text-xl text-dark-02">{name}</h3>
        <p className="mt-1 md:mt-2 font-medium text-dark-04">
          {jobs}+ Jobs Available
        </p>
      </div>
    </div>
  );
};

export default List;
