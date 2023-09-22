import { Link } from "react-router-dom";
import Button from "./Button";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="card bg-base-100 border p-8">
      <figure className="">
        <img src={logo} alt={company_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="space-x-4 my-2">
          <span className="px-6 py-2 border border-blue-500 text-slate-600 font-medium rounded-md">
            {remote_or_onsite}
          </span>
          <span className="px-6 py-2 border border-blue-500 text-slate-600 font-medium rounded-md">
            {job_type}
          </span>
        </div>
        <div className="text-slate-400 text-sm space-x-5">
          <span>{location}</span>
          <span>{salary}</span>
        </div>

        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <Button>View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
