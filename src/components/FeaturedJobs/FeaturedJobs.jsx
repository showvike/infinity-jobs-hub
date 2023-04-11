import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  let allJobs = [];

  useEffect(() => {
    fetch("./featured-jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="mt-16">
      <div className="text-center">
        <h2 className="font-extrabold text-5xl text-dark-01">Featured Jobs</h2>
        <p className="mt-4 font-medium text-dark-03">
          Explore thousands of job opportunities with all the information you
          need. It's your future.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-6 px-24">
        {jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="px-7 py-4 bg-gradient-to-r from-li-gr-fr to-li-gr-to rounded-lg font-extrabold text-xl text-white">
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
