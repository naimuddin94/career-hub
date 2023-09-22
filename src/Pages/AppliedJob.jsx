import { useLoaderData } from "react-router-dom";
import { getJobToLS } from "../utility/SavedToLS";
import { useState, useEffect } from "react";
import Job from "../components/Job";

const AppliedJob = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  const [displayJob, setDisplayJob] = useState([]);
  const jobs = useLoaderData();
  const savedJobsLS = getJobToLS();

  useEffect(() => {
    const filteredJobs = jobs.filter((job) => savedJobsLS.includes(job.id));
    setSavedJobs(filteredJobs);
    setDisplayJob(filteredJobs);
  }, []);

  const handleSortByRemote = (filter) => {
    if (filter === "all") {
      setDisplayJob(savedJobs);
    } else if (filter === "remote") {
      const remoteJobs = savedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJob(remoteJobs);
    } else if (filter === "onsite") {
      const remoteJobs = savedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJob(remoteJobs);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-500 my-10 text-center">
        Applied All Job
      </h1>
      <div className="flex justify-end">
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn m-1">
            Sort
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleSortByRemote("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleSortByRemote("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleSortByRemote("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </div>
      </div>
      {savedJobs.length === 0 && (
        <div className="text-slate-400 font-normal text-center">
          NO JOB FOUND
        </div>
      )}
      <div className="grid gap-5 grid-cols-2 my-10">
        {displayJob.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
