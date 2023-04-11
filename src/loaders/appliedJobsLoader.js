import { getAppliedJobs } from "../utilities/fakeDb";

const appliedJobsLoader = async () => {
  const res = await fetch("/featured-jobs.json");
  const jobs = await res.json();
  const appliedJobsId = getAppliedJobs();
  const appliedJobs = appliedJobsId.map((apId) => {
    const foundedJob = jobs.find((job) => apId == job.id);
    return foundedJob;
  });
  return appliedJobs;
};

export default appliedJobsLoader;
