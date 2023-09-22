const getJobToLS = () => {
  const storeJob = localStorage.getItem("jobs");
  if (storeJob) return JSON.parse(storeJob);
  return [];
};

const saveJobToLS = (jobId) => {
  const savedJobs = getJobToLS();
  const isAvailable = savedJobs.includes(jobId);
  if (!isAvailable) {
    savedJobs.push(jobId);
    localStorage.setItem("jobs", JSON.stringify(savedJobs));
  }
};

export { getJobToLS, saveJobToLS };
