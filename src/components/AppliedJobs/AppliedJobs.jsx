import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const appliedJobsLoader = useLoaderData();

  useEffect(() => setAppliedJobs(appliedJobsLoader), []);

  return (
    <div>
      <div className="py-16 bg-gradient-to-r from-li-gr-fr/[.05] to-li-gr-to/[.05]">
        <h2 className="text-center font-extrabold text-3xl text-dark-01">
          Applied Jobs
        </h2>
      </div>
      <div className="mt-16">
        {appliedJobs.map((appliedJob) => (
          <AppliedJob key={Math.random()} appliedJob={appliedJob} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
