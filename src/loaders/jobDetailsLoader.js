const jobDetailsLoader = async (id) => {
  const res = await fetch("/featured-jobs.json");
  const jobs = await res.json();
  const job = jobs.find((job) => id === job.id);
  console.log(jobs);
  return job;
};

export default jobDetailsLoader;
