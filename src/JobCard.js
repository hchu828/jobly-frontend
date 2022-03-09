/** Presentational for showing a job
 * 
 * props:
 *  - job: an object, like {title, salary, equity, companyHandle, companyName}
 *  - isCompanyJob: true/ false
 * 
 * state: none
 * 
 * JobCardList -> JobCard
 */

function JobCard({ job, isCompanyJob }) {
  return (
    <div>
      <h4>{job.title}</h4>
      {!isCompanyJob &&
        <p>{job.companyName}</p>
      }
      {job.salary &&
        <p>Salary: {job.salary}</p>
      }
      <p>Equity: {job.equity}</p>
    </div>
  )
}
//line 19, if salary is 0
export default JobCard;