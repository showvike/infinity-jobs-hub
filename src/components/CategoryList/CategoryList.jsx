import React, { useEffect, useState } from "react";
import List from "../List/List";

const CategoryList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("./category-list.json")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  return (
    <div className="mt-16">
      <div className="text-center">
        <h2 className="font-extrabold text-5xl text-dark-01">
          Job Category List
        </h2>
        <p className="mt-4 font-medium text-dark-03">
          Explore thousands of job opportunities with all the information you
          need. It's your future.
        </p>
      </div>
      <div className="mt-8 flex justify-between px-24 w-full gap-6">
        {list.map((category) => (
          <List key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
