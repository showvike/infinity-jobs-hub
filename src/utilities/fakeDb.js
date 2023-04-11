const addToDb = (id) => {
  let appliedJobs = getAppliedJobs();
  appliedJobs.push(id);
  localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
};

const getAppliedJobs = () => {
  let appliedJobs = [];
  const storedAppliedJobs = localStorage.getItem("applied-jobs");
  if (storedAppliedJobs) {
    appliedJobs = JSON.parse(storedAppliedJobs);
  }
  return appliedJobs;
};

export { addToDb, getAppliedJobs as getShoppingCart };
