const jobDetailsLoader = async (id) => {
  const res = await fetch("/featured-jobs.json");
  const jobs = await res.json();
  const job = jobs.find((job) => id === job.id);
  return job;
};

export default jobDetailsLoader;
