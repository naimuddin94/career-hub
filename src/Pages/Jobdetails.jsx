import { useLoaderData, useParams } from "react-router-dom";
import { saveJobToLS } from "../utility/SavedToLS";

const Jobdetails = () => {
  const jobs = useLoaderData();
  const { jobId } = useParams();
  const idInt = parseInt(jobId);
  const job = jobs.find((job) => job.id === idInt);
  const {
    id,
    job_title,
    company_name,
    salary,
    logo,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information: { phone, address, email },
  } = job;

  const handleJob = (jobId) => {
    saveJobToLS(jobId);
  };

  return (
    <div className="grid grid-cols-12 gap-6 my-10">
      <div className="col-span-8 space-y-4">
        <p>
          <span className="font-medium">Job Description:</span>{" "}
          {job_description}
        </p>
        <p>
          <span className="font-medium">Job Responsibility:</span>{" "}
          {job_responsibility}
        </p>
        <p>
          <span className="font-medium">Educational Requirement:</span>{" "}
          {educational_requirements}
        </p>
        <p>
          <span className="font-medium">Experience:</span> {experiences}
        </p>
      </div>
      <div className="col-span-4">
        <div className="bg-blue-100 p-8 text-sm space-y-1 rounded-md mb-4">
          <h2 className="text-lg font-semibold py-2">Job Details</h2>
          <hr />
          <h3>Salary: {salary}</h3>
          <h3>Job title: {job_title}</h3>
          <h2 className="text-lg font-semibold py-2">Contact Information</h2>
          <hr />
          <h3>Phone: {phone}</h3>
          <h3>Email: {email}</h3>
          <h3 className="">Address: {address}</h3>
        </div>
        <button
          onClick={() => handleJob(id)}
          className="btn btn-primary btn-block btn-active"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Jobdetails;
