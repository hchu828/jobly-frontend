import JobCard from "./JobCard";

/** Presentational for showing a list of jobs
 * 
 * props:
 *  - jobList: an array of job object, like
 *              [{title, salary, equity, companyHandle, companyName}...]
 *  - isCompanyJob: true/false
 * 
 * (JobList, CompanyDetail) -> JobCardList -> JobCard
 */
function JobCardList({ jobList, isCompanyJob }) {
  return (
    <div>
      {jobList.map(job =>
        <JobCard
          job={job}
          isCompanyJob={isCompanyJob}
          key={job.id}
        />)}
    </div>
  );
}

export default JobCardList;