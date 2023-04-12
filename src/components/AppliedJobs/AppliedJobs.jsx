import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const appliedJobsLoader = useLoaderData();

  useEffect(() => setAppliedJobs(appliedJobsLoader), []);

  const handleRemote = () => {
    const remoteJobs = appliedJobs.filter(
      (appliedJob) => appliedJob.type === "Remote"
    );
    setAppliedJobs(remoteJobs);
  };

  const handleOnsite = () => {
    const onsiteJobs = appliedJobs.filter(
      (appliedJob) => appliedJob.type === "Onsite"
    );
    setAppliedJobs(onsiteJobs);
  };

  return (
    <div>
      <div className="py-16 bg-gradient-to-r from-li-gr-fr/[.05] to-li-gr-to/[.05]">
        <h2 className="text-center font-extrabold text-3xl text-dark-01">
          Applied Jobs
        </h2>
      </div>
      <div className="mt-16 mx-24 flex gap-4 justify-end">
        <button
          onClick={handleRemote}
          className="px-4 py-2.5 bg-gradient-to-r from-li-gr-fr to-li-gr-to rounded-lg font-extrabold text-xl text-white"
        >
          Remote
        </button>
        <button
          onClick={handleOnsite}
          className="px-4 py-2.5 bg-gradient-to-r from-li-gr-fr to-li-gr-to rounded-lg font-extrabold text-xl text-white"
        >
          Onsite
        </button>
      </div>
      <div className="mt-8">
        {appliedJobs.map((appliedJob) => (
          <AppliedJob key={Math.random()} appliedJob={appliedJob} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
