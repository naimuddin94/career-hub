import { useState } from "react";
import Job from "./Job";
import { useEffect } from "react";

const Jobs = ({ jobs }) => {
  const [dataLength, setDataLength] = useState(4);
  const [displayJob, setDisplayJob] = useState([]);

  useEffect(() => {
    setDisplayJob([...jobs]);
  }, [jobs]);

  const handleLength = () => {
    setDataLength(jobs.length);
  };
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-slate-700">
        Featured Jobs
      </h1>
      <p className="text-center text-slate-400 text-sm pb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gap-5 my-5">
        {displayJob.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div
        className={dataLength === jobs.length ? "hidden" : "text-center my-5"}
      >
        <button onClick={handleLength} className="btn btn-primary">
          Show All
        </button>
      </div>
    </div>
  );
};

export default Jobs;
