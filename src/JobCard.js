
function JobCard({ job, isCompanyJob }) {
  return (
    <div>
      <h4>{job.title}</h4>
      {isCompanyJob &&
        <p>{job.companyName}</p>
      }
      {job.salary &&
        <p>Salary: {job.salary}</p>
      }
      <p>Equity: {job.equity}</p>
    </div>
  )
}

export default JobCard;